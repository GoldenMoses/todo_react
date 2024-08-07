import logo from './logo.svg';
import './App.css';
import {useRef, useState} from 'react'

function App() {

  let xxx = useRef(0); // 일반데이터 저장용도

  function up(){
    console.log(xxx);
    xxx.current = xxx.current+1
    console.log(xxx.current);
  }
  return (  

    <div className="App">
        <h2>ref 사용</h2>
        ref 값 : {xxx.current}
        <button onClick={up}>+</button>
    </div>
  );
}

export default App;
