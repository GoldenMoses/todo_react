import logo from './logo.svg';
import './App.css';
import {useRef} from 'react';
import Child from './components/Child'

function App() {

  const xxx = useRef(null);

  function show_modal(){
    // Child의 메서드 호출
    xxx.current.modal_open();
  }
  return (  
    <div className="App">
      <h2>App 컴포넌트</h2>
        <button onClick ={show_modal}>모달창 열기</button>
        <Child ref={xxx}/>
    </div>
  );
}

export default App;
