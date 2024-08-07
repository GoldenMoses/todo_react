import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';

function App() {

  const[userList, setUserList] = useState([]);

  var url = "https://reqres.in/api/users?page=2";

  useEffect(()=>{

    var req = async function(){
    
      var response = await fetch(url);
      var json = await response.json();
      console.log("json", json);
      var userList = json.data;
      console.log("userList", userList);
      setUserList(userList);
    };
    req();
  },[]);

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
      {
        userList.map((row,idx)=>
            <tr key={idx}>
              <td>{idx}</td>
              <td><img src={row.avatar}/></td>
              {/* <td>{row.id}</td> */}
              <td>{row.email}</td>
              <td>{row.first_name}</td>
            </tr>
        )
      }
      </table>
    </div>
  );
}

export default App;
