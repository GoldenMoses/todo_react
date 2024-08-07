import logo from './logo.svg';
import './App.css';

// 함수형 컴포넌트
function App() {


  //이벤트핸들러 ARROW 함수
  function handleEvent4 (name,e){
    console.log("handleEvent4",name,e);
  }
  
  //이벤트핸들러 ARROW 함수
  function handleEvent2 (e){
    console.log("handleEvent2",e);
  }

  //이벤트핸들러 이벤트함수명
  function handleEvent(e){
    console.log("handleEvent",e,e.target, e.target.innerText);
  }

  return (  
    <div className="App">
      <h2>App 컴포넌트</h2>
      <button onClick={handleEvent}>OK</button>

      <button onClick={()=>{handleEvent2()}}>2K</button>
      <button onClick={(e)=>{handleEvent2(e)}}>2Ke</button>

      <button onClick={(e)=>{handleEvent4("고길동",e)}}>4K</button>
    </div>
  );
}

export default App;
