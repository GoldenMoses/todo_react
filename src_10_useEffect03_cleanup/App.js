import logo from './logo.svg';
import './App.css';
import{useEffect, useState} from 'react';

function App() {

  const [num, setNum] = useState(0);

  useEffect(
            //부수기능
            ()=>{
                  console.log("useEffect : Nada")
                  //clean-up
                  return ()=>{console.log("clean-up")}
            }
           )


  function up(){
    setNum(num+4);
  }

  console.log("App");

  return (  
    <div className="App">
      값 : {num}<br/>
      <button onClick={up}>↑</button>
    </div>
  );
}

export default App;
