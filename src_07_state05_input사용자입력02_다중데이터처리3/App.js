import logo from './logo.svg';
import './App.css';
import {useState} from 'react';


function App() {

  const[inputs, setInputs]=useState({userid:'', passwd:''});

  function handleEvent(e){
     var new_inputs = {...inputs, [e.target.name]:e.target.value}
     setInputs(new_inputs);
     console.log(e.target.value);
     console.log(new_inputs);
    }


  function handleSubmit(e){
      e.preventDefault();
      console.log();
  }
  return (  
    <div className="App">
      <h1>사용자 입력태그 + state 사용</h1>
      <form onSubmit={handleSubmit}>
        아이디:<input type="text" name="userid" onChange={handleEvent}/><br></br>
        비번:<input type="text" name="passwd" onChange={handleEvent}/><br></br>
        <input type="submit" value="로그인"/>
      </form>
    </div>
  );
}

export default App;
