import './App.css';
import { PersonList } from './components/PersonList.js';


let persons = [
  { name: "고길동", age: 35 },
  { name: "박정자", age: 35 },
  { name: "둘리", age: 10 },
  { name: "도우너", age: 9 }
]
console.log(persons);

var result = persons.map(function(data,idx){
  console.log(data,idx);
  return data;
})

function App() {
  return <div className="App">
    <h1>학생 정보</h1>
    <table border="1">
          <thead>
            <tr>
                <td>번호</td>
                <td>이름</td>
                <td>나이</td>
            </tr>
          </thead>
          <tbody>
      {
        persons.map((data,idx)=>{
          return <PersonList key={idx} idx={idx} username = {data.name} age = {data.age}/>
          })
        }
        </tbody>
        </table>
    </div>
  }

export default App;
