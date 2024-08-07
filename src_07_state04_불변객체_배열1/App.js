import logo from './logo.svg';
import './App.css';
import {useState} from 'react';



function App() {

  const [num, setNum] = useState({n:0})  //JSON

  function handleEvent(){

    // 불변객체가 아니기 때문에 리액트가 n의 변경사항을 인식하지 못함. 따라서 화면 갱신 불가.
    // num.n +=1;
    // setNum(num);
    
    // JSON 처리는 반드시 다음과 같이 복사본을 만들고 값을 변경하는 방식으로 state을 변경한다.
    const new_num = {...num, n:num.n+1}; 
    console.log(new_num, num); // n:0, n:1) -> 병합되어 최종적으로 {n:1} 남음
    console.log(new_num === num);
  
    setNum(new_num);
    
  }
  




  return (  
    <div className="App">
      <h2>01 JSON을 이용한 state 처리</h2>

      값:{num.n}<br></br>
      <button onClick={handleEvent}>+ 불변객체</button>
    </div>
  );
}

export default App;
