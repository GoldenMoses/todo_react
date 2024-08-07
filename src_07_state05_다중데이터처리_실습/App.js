import logo from './logo.svg';
import './App.css';
import {useState} from 'react';


function App() {

  const[num, setNum]=useState(0);
  const[step, setStep]=useState(1);

  function up(){
    setNum(num+step);
    }

  function down(){
    setNum(num-step>0? num-step:0);
    }

  function handleEvent(e){
    setStep(Number.parseInt(e.target.value))
  }
  
  function handleSubmit(e){
      e.preventDefault();
  }
  return (  
    <div className="App">
      <h2>state 실습</h2>
      STEP:
      <select onChange={handleEvent}>
        <option>1</option>
        <option>2</option>
        <option>3</option>
      </select>
      <br></br>
      num:{num}
      <br></br>
      <button onClick={()=>up()} name="add" value="add">+</button>
      <button onClick={()=>down()} name="minus" value="minus">-</button>

    </div>
  );
}

export default App;
