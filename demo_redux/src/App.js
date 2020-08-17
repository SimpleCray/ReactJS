import React from 'react';
import './App.css';
import HomePage from './pages/HomePage';

//Shouldn't connect to redux store in App.js, because its may cause app to rerender countinously, result in poor performace
function App() {
  return (
    <div>
      <HomePage/>
    </div>
  );
}

export default App;
