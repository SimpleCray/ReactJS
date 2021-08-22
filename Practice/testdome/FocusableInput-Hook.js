// Finish the FocusableInput component so that the input element automatically receives focus on the first render if the shouldFocus prop is true.
// The component should use React Hooks.
// Requirement:
//     The input is focused only if shouldFocus is true: Wrong answer 
//     The input is focused only on the first render: Wrong answer 
//     The component uses React Hooks: Wrong answer 

// React is loaded and is available as React and ReactDOM
// imports should NOT be used
const FocusableInput = (props) => {
    // Write your code here
    const {shouldFocus} = props;
    const inputRef = React.useState(null);

    React.useEffect(() => {
        if (shouldFocus) {
            inputRef.current.focus();
        }
    })
    return <input ref={inputRef}/>;
  };
  
  document.body.innerHTML = "<div id='root' />";
  ReactDOM.render(<FocusableInput shouldFocus={true} />, document.getElementById("root"));
  setTimeout(() => console.log(document.getElementById("root").innerHTML));