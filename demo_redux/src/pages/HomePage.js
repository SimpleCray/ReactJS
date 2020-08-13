import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addNewHobby } from '../actions/hobby';
import HobbyList from '../components/Home/HobbyList';

HomePage.propTypes = {

};

const randomNumber = () => {
    return 1000 + Math.trunc(Math.random()*9000);
}

function HomePage(props){
    const hobbyList = useSelector(state => state.hobby.list);
    const dispatch = useDispatch();

    console.log(hobbyList)
    const handleAddHobbyClick = ()=>{
        const newId = randomNumber()
        //Random a hobby object: id + title
        const newHobby ={
            id: newId,
            title: `Hobby ${newId}`,
        }


        //Dispatch action to add a new hobby to redux store
        const action = addNewHobby(newHobby);
        dispatch(action);
    }

    return(
        <div className="home-page">
            <h1>Redux Hook</h1>
            <button onClick={handleAddHobbyClick}>Random hobby</button>
            <HobbyList hobbyList={hobbyList}></HobbyList>
        </div>
    )
}
export default HomePage;