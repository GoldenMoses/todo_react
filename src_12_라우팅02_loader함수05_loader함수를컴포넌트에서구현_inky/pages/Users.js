
import { useLoaderData, useRouteLoaderData } from "react-router-dom";
import UserList from "./UserList";

function Users(){

  // const xxx = useLoaderData(); // 자신의 loader 데이터ㅌㄴ
   const xxx = useRouteLoaderData("root"); // id="root" loader 데이터
  console.log(xxx);

    return(
      <>
        <h2>Users</h2>
        <UserList userList={xxx}/>
      </>
    );
}
/////////////////////////////////////////////////
export async function loader(){
  var url = "https://reqres.in/api/users?page=2";
  var  response = await fetch(url);
  var json = await response.json();
  var userList = json.data;
  return userList;
}
///////////////////////////////////////////////
export default Users;