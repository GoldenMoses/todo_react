import logo from './logo.svg';
import './App.css';
import {useState} from 'react';



function App() {

  const [num, setNum] = useState([])  //배열

  function handleEvent(){

    // 다음은 불변객체가 아니기 때문에 리액트가 n의 변경사항을 인식하지 못함. 따라서 화면 갱신이 안됨.
    // num.push(10);
    // setNum(num);
    
    var new_num = [...num,10];
    console.log(new_num, num);
    console.log(new_num===num);

    setNum(new_num);
    
  }
  




  return (  
    <div className="App">
      <h2>01 JSON을 이용한 state 처리</h2>

      값:{num}<br></br>
      <button onClick={handleEvent}>+ 10</button>
    </div>
  );
}

export default App;
