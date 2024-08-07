import logo from './logo.svg';
import './App.css';
import Child from './components/Child.js';

function App() {

  function handleEvent(name){
    console.log("App.handleEvent", name)
  }
  return (  
    <div className="App">
      <h2>App 컴포넌트</h2>
      <Child onParent={handleEvent} /> 
      {/* OnParent는 임의의 속성 */}
    </div>
  );
}

export default App;
