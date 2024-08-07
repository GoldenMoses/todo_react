import logo from './logo.svg';
import './App.css';
import {Menu}   from './components/Menu.js'
import {Bottom, Bottom2} from './components/Bottom.js'

function App() {
  return (  
    <div className="App">
      <Menu />
      <hr></hr>
      App Component
      <hr></hr>
      <Bottom/>
      <Bottom2/>
    </div>
  );
}

export default App;
