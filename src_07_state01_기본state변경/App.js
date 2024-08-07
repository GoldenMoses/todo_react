import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {

  const [num, setNum] = useState(0); // 최상위 root에 상수 입력
  // console.log(useState(0)); [0,f] f-> 함수

  // +에 대한 이벤트 함수
  function up(){
      setNum(num+1); //반드시 SET 메서드로 변경해야 된다.
  }

  function down(){
    if(num>0){
    setNum(num-1); //반드시 SET 메서드로 변경해야 된다.
    }
  }

  function down2(){
    setNum(num>0? num-1:0);
  }

  console.log("App");
  return (  
    <div className="App">
      <h2>num값 변경</h2>
      값 : {num}<br></br>
      <button onClick={up}>+</button>
      <button onClick={down}>-</button>
    </div>
  );
}

export default App;
