
import { useState, useEffect } from 'react';
import { UserList } from './UserList';

function Users(){

    const[userList, setUserList] = useState([]);
    const[error, setError] = useState();
    const[isLoading, setIsLoading] = useState(false);

    useEffect(()=>{

        // setIsLoading(isLoading=>!isLoading);
        setIsLoading(true);
        var req = async function(){
        var url = "https://reqres.in/api/users?page=2";  
          var response = await fetch(url,{method:"put"});

          //에러 처리
          if(!response.ok){
            throw new Error("에러발생");
          }

          var json = await response.json();
          var userList = json.data;
          return userList;
        };

        // promise 호출한 req가 return을 받는다
        req()
        .then((userList)=>setUserList(userList)) //성공시 처리
        .catch((error)=>setError(error)) // 에러 발생시 처리
        .finally(()=>setIsLoading(false)); // 반드시 수행하는 작업
        
      },[]);

      //화면출력 코드
      let content;
      if(isLoading){
        content="주문하신 내용을 맛있게 로딩중입니다.";
      }

      if(error){
        content = "에러 발생됨";
      }

      if(userList){
        content=
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
      }

    return(
        <>
            <h1>GoldenCarrot Users</h1>
            <h6>Product 01 : CarrotCake</h6>
            <h6>Product 02 : CarrotBundle</h6>
            <h6>Product 03 : IronCarrot</h6>
            <h6>Product 04 : CarrotLand</h6>
            <h6> Product 05 : CarrotTrain</h6>
            <h6><a href="/">Back</a></h6>
        </>
    )
}

export default Users;