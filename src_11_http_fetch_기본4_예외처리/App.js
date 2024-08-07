
import './App.css';

import { useEffect, useState } from 'react';
import UserList from './components/UserList.js';
import { fetchUserList } from './http/HttpService.js'
import ResponseError from './components/ResponseError';

function App() {

  const[userList, setUserList] = useState([]);
  const[error, setError] = useState(null);


  useEffect(()=>{
    
    
    var req = async function(){
      try{
      var userList = await fetchUserList(2);
      setUserList(userList);
    } catch(err){
      <ResponseError/>
      console.log("App.fetchUserlist",err);
      setError({message:"fetchUserList 에러발생"});
    }
    };
    req();
  },[]);
  console.log("useEffect", useEffect);

  if(!error){
  return (
    <div className='App'> 
    <h3>UserList 염탐하기</h3>
    {error && <ResponseError message={error}/>}
    {!error && <UserList data={userList}/>}


    </div>)


}
}

export default App;
