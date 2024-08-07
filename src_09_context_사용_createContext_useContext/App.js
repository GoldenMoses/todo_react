import logo from './logo.svg';
import './App.css';
import BoardList from './components/BoardList';
import {useState} from 'react';
import { UserContext } from './store/user-context';

function App() {

  const [name, setName]=useState('고길동');


  return (  
    <div className="App">
      <UserContext.Provider value={name}>
        <BoardList/>
      </UserContext.Provider>
    </div>
  );
}

export default App;
