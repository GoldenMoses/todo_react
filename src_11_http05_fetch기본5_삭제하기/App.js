
import './App.css';
import UserList from './components/UserList.js';
import { useEffect, useState } from 'react';
import { fetchUserList } from './http/HttpService';
import ResponseError from './components/ResponseError';

function App() {

  const[userList, setUserList] = useState([]);
  const[error, setError] = useState(null);
  const[modalIsOpen, setModalIsOpen] = useState(false);
  const[delUser,setDeluser] = useState(null); //삭제할 id 저장할 state

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

  // 삭제
  function handleRemove(del_id){
    console.log("App.handleRemove", del_id);
    setModalIsOpen(modalIsOpen=>!modalIsOpen); //모달창 열기/닫기
    setDeluser(del_id) //삭제할 id를 저장한다.
  }

  // 삭제 진행
  function handleRemoveConfirm(){
    console.log("App.handleRemoveConfirm");
    setModalIsOpen(false);

    var new_userList = userList.filter((row,idx)=> row.id !== delUser);
    setUserList(new_userList);
    console.log("new_userList", new_userList);

  }

  return (
    <div className='App'>

      {/* 모달창 */}
      <dialog open={modalIsOpen}>
      <h3>해고하시겠습니까?</h3>
      <button onClick={()=>setModalIsOpen(false)}>취소</button>
      <button onClick={handleRemoveConfirm} >해고</button>
        

      </dialog>
    <h3>UserList 염탐하기</h3>
    {error  && <ResponseError message={error}/>}
    {!error && <UserList data={userList} onRemove={handleRemove}/>}
    </div>)

}

export default App;
