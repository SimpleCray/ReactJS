import React, { useEffect, useState } from 'react';

function App() {
    //give an initial state so that the data won't be undefined at start
    const [bids, setBids] = useState([0]);


    const apiCall = {
        event: 'bts:subscribe',
        data: { channel: 'order_book_btcusd' },
    };

    useEffect(() => {
        const ws = new WebSocket('wss://ws.bitstamp.net');
        ws.onopen = (event) => {
            ws.send(JSON.stringify(apiCall));
        };

        ws.onmessage = function (event) {
            const json = JSON.parse(event.data);
            console.log(json)
            try {
                if ((json.event === 'data')) {
                    setBids(json.data.bids?.slice(0, 5));
                }
            } catch (err) {
                console.log(err);
            }
        };
        return () => ws.close();
    }, []);

    return (
        <div>
            {bids.map((item) => (
                <p>{item}</p>
            ))}
        </div>
    );
}

export default App;
