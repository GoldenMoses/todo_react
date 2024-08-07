import {useEffect, useState} from 'react';
import UserList  from './UserList.js';
function Users(){

  const [userList, setUserList] = useState();
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(()=>{
    // setIsLoading(isLoading=>!isLoading);
    setIsLoading(true);
    var url = "https://reqres.in/api/users?page=2";
    var req = async function(){
       var  response = await fetch(url, { method:"put"}); // 명시적으로 예외발생은 put으로 설정

       //에러 처리
       if(!response.ok){
         throw new Error("에러발생");
       }

       var json = await response.json();
       var userList = json.data;
       return userList;
    };
    // promise
    req()
    .then((userList)=> setUserList(userList))   // 성공시 처리
    .catch((error)=>setError(error))  // 에러발생시 처리
    .finally(()=>setIsLoading(false)); // 반드시 수행

},[]);

   //화면출력 코드
    let content;
    if(isLoading){
      content = "로딩중입니다.";
    }Ex``x``
    if(error){
      content = "에러 발생됨";
    }
    if(userList){
      content= <UserList data={userList}/> 
    }
    return(
        <>
        <h2>Users</h2>
        {content}
      </>
    );
}

export default Users;