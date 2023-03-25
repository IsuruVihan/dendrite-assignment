import React from 'react';
import './App.scss';

import MyComponent from './components/MyComponent';
import Counter from "./components/Counter";

const App = () => {
  return (
    <div className="App">
      Isuru Harischandra
      <MyComponent onClick={() => {console.log("Hi")}}/>
      <Counter/>
    </div>
  );
}

export default App;
