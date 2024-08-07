import logo from './logo.svg';
import './App.css';
import {useState} from 'react';


function App() {

  const[userid, setUserid]=useState('');
  const[passwd, setPasswd]=useState('');

  function handleEvent(e){
    console.log(e.target);
    console.log("아아디:", userid);
    console.log("비번:", passwd);
    if(e.target.name == 'userid'){
      setUserid(e.target.value);
    }else{
      setPasswd(e.target.value);}
    }


  function handleSubmit(e){
    e.preventDefault();
    console.log("입력값 :", userid, passwd)
  }
  return (  
    <div className="App">
      <h1>사용자 입력태그 + state 사용</h1>
      <form onSubmit={handleSubmit}>
        아이디:<input type="text" name="userid" value={userid} onChange={handleEvent}/><br></br>
        비번:<input type="text" name="passwd" value={passwd} onChange={handleEvent}/><br></br>
        <input type="submit" value="로그인"/>
      </form>
    </div>
  );
}

export default App;
