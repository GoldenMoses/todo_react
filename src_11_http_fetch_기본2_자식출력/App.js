
import './App.css';
import './components/UserList';
import { useState, useEffect } from 'react';
import { UserList } from './components/UserList';

function App() {

  const[userList, setUserList] = useState([]);

  var url = "https://reqres.in/api/users?page=2";

  useEffect(()=>{

    var req = async function(){
    
      var response = await fetch(url);
      var json = await response.json();
      var userList = json.data;
      console.log("userList", userList);
      setUserList(userList);
    };
    req();
  },[]);
  console.log("useEffect", useEffect);

  return (  
    <div className="App">
      <table border="0">
        <tr>
          <th>idx</th>
          <th>Avatar</th>
          <th>ID</th>
          <th>e-m@il</th>
          <th>1st Name</th>
        </tr>
          <UserList data={userList}/>
      </table>
    </div>
  );
}

export default App;
