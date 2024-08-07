import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {

  const [isEditing, setIsEdition] = useState(true);

  // 이벤트 함수
  function handleEvent(){
    setIsEdition(isEditing=>!isEditing);
  }


  // 조건부 렌더링 방식 1
  let tag = <>
            <span>고길동</span>
            </>

  if(!isEditing){
    tag = <>
            <input />
          </>
  }

  return (  
    <div className="App">
      <h2>if문 이용한 조건부 렌더링</h2>
      {tag}
      <button onClick={handleEvent}>{!isEditing?'SAVE':'Edit'}</button>
    
      <h2>3항연산자 조건부 렌더링</h2>
      {isEditing?<span>고길동</span>:<input/>}
      <button onClick={handleEvent}>{!isEditing?'SAVE':'Edit'}</button>
      
      <h2>&& 이용한 조건부 렌더링</h2>
      {isEditing && <span>고길동</span>}
      {!isEditing && <input/>}
      <button onClick={handleEvent}>{!isEditing?'SAVE':'Edit'}</button>

    </div>
  );
}

export default App;
