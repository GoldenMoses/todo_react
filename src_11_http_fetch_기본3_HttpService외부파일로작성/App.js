
import './App.css';
import './components/UserList';
import { useEffect, useState } from 'react';
import { UserList } from './components/UserList';
import { fetchUserList } from './http/HttpService';

function App() {

  const[userList, setUserList] = useState([]);

  
  useEffect(()=>{
    

    var req = async function(){
      var userList = await fetchUserList(2);
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
