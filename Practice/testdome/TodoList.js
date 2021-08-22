// Write a TodoList component that expects an items prop which is a list of objects,
// each with text and done properties.
// TodoList also accepts an onItemClick function prop,
// which should be called when a user clicks an item in the list,
// if the item is not marked as done. Otherwise, the onItemClick should not be called
// and the click event itself should not be propagated further.
// The function should be called with the item object from the items list as the
// first parameter and the event as the second parameter.

// // Requirements:
// Clicking on a not done item should trigger onItemClick: Wrong answer
// Clicking on a done item should not trigger onItemClick or a parent click: Wrong answer

// React is loaded and is available as React and ReactDOM
// imports should NOT be used
import React from 'react';
const TodoItem = (props) => <li onClick={props.onClick}>{props.item.text}</li>;

class TodoList extends React.Component {
    render() {
        const { items } = this.props;
        return (
            <ul>
                {items.map((item, index) => (
                    <TodoItem item={item} key={index} onClick={this.handleItemClick.bind(this, item)} />
                ))}
            </ul>
        );
    }

    handleItemClick(item, event) {
        if (!item.done) {
            // event.persist();
            this.props.onItemClick(item, event);
        }
    }
}

const items = [
    { text: "Buy grocery", done: true },
    { text: "Play guitar", done: false },
    { text: "Romantic dinner", done: false },
];

const App = (props) => (
    <TodoList
        items={props.items}
        onItemClick={(item, event) => {
            console.log(item, event);
        }}
    />
);

document.body.innerHTML = "<div id='root'></div>";
const rootElement = document.getElementById("root");
ReactDOM.render(<App items={items} />, rootElement);
