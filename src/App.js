import { react, useState } from "react";
import "./App.css";

function App() {

  const [text, setText]= useState("")
  const [words, setWords]= useState(0)

const handleChange =(e)=>{
setText(e.target.value)
const words = text.split(" ");
  setWords(words.length);
}
const handleClickUpper =(e)=>{
setText(text.toUpperCase())
}
const handleClickLower =(e)=>{
setText(text.toLowerCase())
}


  return (
    <div className="App">
      <div className="main-app">
        <div className="head">
          <h1>Wordly Playground</h1>
        </div>
      </div>
      <div className="main">
        <div className="left">
          <textarea value={text} onChange={e=>handleChange(e)}></textarea>
        </div>
        <div className="right">
          <label>Words Count : {words}</label>
          <label>Char Count :  {text.length}</label>
          
          <button onClick={handleClickUpper}>Upper Case</button>
          <button onClick={handleClickLower}>Lower Case</button>
        </div>
      </div>
    </div>
  );
}

export default App;
