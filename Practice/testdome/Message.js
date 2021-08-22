// The Message component contains an anchor element and a paragraph below the anchor. Rendering of the paragraph should be toggled by clicking on the anchor element using the following logic:

// At the start, the paragraph should not be rendered.
// After a click, the paragraph should be rendered.
// After another click, the paragraph should not be rendered.
// Finish the Message component by implementing this logic.

// Requirement:
// At the start, the paragraph should not be visible: Wrong answer
// After a click, the paragraph should be visible: Wrong answer
// After a second click, the paragraph should not be visible again: Wrong answer

// React is loaded and is available as React and ReactDOM
// imports should NOT be used
class Message extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        };
        this.renderComponent = this.renderComponent.bind(this);
    }
    // renderComponent() {
    //     this.setState(!this.state);
    // }
    renderComponent() {
        this.setState({
            visible: !this.state.visible,
        });
    }
    
    render() {
        return (
            <React.Fragment>
                <a href="#" onClick={this.renderComponent}>Want to buy a new car?</a>
                {this.state.visible && <p>Call +11 22 33 44 now!</p>}
            </React.Fragment>
        );
    }
}

document.body.innerHTML = "<div id='root'> </div>";

const rootElement = document.getElementById("root");
ReactDOM.render(<Message />, rootElement);

console.log("Before click: " + rootElement.innerHTML);
document.querySelector("a").click();
console.log("After click: " + rootElement.innerHTML);
