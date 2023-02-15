import React from 'react'
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import InputControl from './components/InputControl/InputControl';
import Editor from './components/Editor/Editor';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Body/>
      <InputControl/>
      
    </div>
  );
}

export default App;
