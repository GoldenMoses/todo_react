import logo from './logo.svg';
import './App.css';
import {useEffect,useRef} from 'react';


function App() {

  const userid = useRef(null);

  useEffect(()=>{
    userid.current.focus();
  },[])

  return (  


    <div className="App">
      ID:<input ref={userid} type="text"/><br/>
      PW:<input type="text"/><br/>
    </div>
  );
}

export default App;
