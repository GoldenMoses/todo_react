import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {

  const [isEditing, setIsEdition] = useState(true);

  // 이벤트 함수
  function handleEvent(){
    // OLD한 방식 -> 모두 한 번에 싸잡아서 실행됨
    // setIsEdition(!isEditing);
    // setIsEdition(!isEditing); 
    // new 방식 : 논리 관련 함수는 arrow를 쓰자 -> 각각 실행됨
    setIsEdition(isEditing=>!isEditing);
    setIsEdition(isEditing=>!isEditing);
  }

  return (  
    <div className="App">
      <h2>논리값 state</h2>
      값 : {isEditing? "true":"false"}
      <button onClick={handleEvent}>edit</button>
    </div>
  );
}

export default App;
