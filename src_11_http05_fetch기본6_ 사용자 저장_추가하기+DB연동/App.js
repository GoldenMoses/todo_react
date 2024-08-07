
import './App.css';

import {useEffect, useState} from 'react';

import UserList  from './components/UserList.js';
import { fetchUserList, fetchUserSave } from './http/HttpService.js';
import ResponseError from './components/ResponseError.js';

function App() {


  const [userList, setUserList] = useState([]);
  const [error, setError] = useState(null);
  const [modalIsOpen, setModelIsOpen] = useState(false);
  const [user, setUser] = useState(null);  // 삭제할 id 저장할 state
  const [isEdit, setIsedit] = useState(true);
  const [inputs, setInputs] = useState({
    id:"",
    email:"",
    first_name:"",
    last_name:"",
    avatar: "https://reqres.in/img/faces/12-image.jpg"
  });
  useEffect(()=>{
      var req = async function(){
        try{
         var userList = await fetchUserList(2);
         setUserList(userList);
        }catch(err){
          console.log("App.fetchUserList", err);
          setError({message:"fetchUserList 에러발생"});
        }
      };
      req();
  },[]);

  //삭제-모달창이용해서 확인
  function handleRemove(del_id){
     console.log("App.handleRemove", del_id);
     setModelIsOpen(modalIsOpen=>!modalIsOpen);
     setUser(del_id);  // 삭제할 id 저장
  }

  function handleRemoveConfirm(){
    console.log("App.handleRemoveConfirm");
    setModelIsOpen(false);

    var new_userList = userList.filter((row,idx)=> row.id !== user);
    console.log(new_userList);
    setUserList(new_userList);
 }

 function handleAdd(){
  setIsedit(isEdit=>!isEdit);
 }
 //추가
 function handleSubmit(e){
   e.preventDefault();
  console.log("inputs:", inputs);

  //서버연동
  let response = fetchUserSave();
  console.log("fetchUserSave response: ", response);

  //로컬변경
  var new_userList = [ ...userList, inputs ];
  setUserList(new_userList);
 }
  
 function handleChange(e){
  var new_inputs={...inputs, [e.target.name]:e.target.value}
  setInputs(new_inputs);
  console.log(e.target.value);
  console.log(new_inputs)
 }


  return (
    <div className="App">
       {/* 모달창 */}
       <dialog open={modalIsOpen}>
         <h2>진짜로 삭제할까요</h2>
         <button onClick={()=>setModelIsOpen(false)}>cancel</button>
         <button onClick={handleRemoveConfirm}>ok</button>
      </dialog>



       <h2>UserList 목록보기</h2>
        { error && <ResponseError message={error} /> }
        { !error && <UserList data={userList}  onRemove={handleRemove} /> }  

        <hr/>

        <button onClick={handleAdd}>추가</button>
        { !isEdit &&
          <form onSubmit={handleSubmit}>
            id :          <input type="text" name="id" onChange={handleChange} value={inputs.id}/><br/>
            e-mail :      <input type="text" name="email" onChange={handleChange} value={inputs.email}/><br/>
            first_name :  <input type="text" name="first_name" onChange={handleChange} value={inputs.first_name}/><br/>
            last_name :   <input type="text" name="last_name" onChange={handleChange} value={inputs.last_name}/>
            <button>save</button>
          </form>
          }
    </div>
  );
}

export default App;
