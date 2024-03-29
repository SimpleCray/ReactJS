// This application should allow the user to update their username by inputting a custom value and clicking the button.

// The Username component is finished and should not be changed, but the App component is missing parts. Finish the App component so that the Username component displays the inputted text when the button is clicked.

// The App component should use the React.useRef Hook to pass the input to the Username component for the input element and for the Username component.

// For example, if the user inputs a new username of "John Doe" and clicks the button, the div element with id root should look like this:

// <div><button>Change Username</button><input type="text"><h1>John Doe</h1></div>

// Requirement:
//     Example case: Wrong answer 
//     Clicking on the button updates the username from the input: Wrong answer 
//     Reference Hook was used to update username: Wrong answer 

// React is loaded and is available as React and ReactDOM
// imports should NOT be used
class Username extends React.Component {
    state = { value: "" };
  
    changeValue(value) {
      this.setState({ value });
    }
  
    render() {
      const { value } = this.state;
      return <h1>{value}</h1>;
    }
  }
  
  function App() {
    const ref = React.useRef()
    const inputRef = React.useRef()
  
    function clickHandler() {
      ref.current.changeValue(inputRef.current.value)
    }
  
  
    return (
      <div>
        <button onClick={clickHandler}>Change Username</button>
        <input type="text" ref={inputRef}  />
        <Username ref={ref} />
      </div>
    );
  }
  
  document.body.innerHTML = "<div id='root'></div>";
  const rootElement = document.getElementById("root");
  ReactDOM.render(<App />, rootElement);
  
  document.querySelector("input").value = "John Doe";
  document.querySelector("button").click();
  setTimeout(() => console.log(document.getElementById("root").innerHTML));