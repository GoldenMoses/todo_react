
import { useLoaderData, useRouteLoaderData } from "react-router-dom";
import UserList from "./UserList";

function Users(){

    // const load = useLoaderData(); 자신의 async function 데이터 사용
    const load = useRouteLoaderData("root"); // id="root" loader 데이터
    console.log("useLoaderData", load);

    return(
      <>
        <h2>Users</h2>
        <UserList userList={load}/>
        <h2>UserSinglePage</h2>
      </>
    );
}
//////////////////////////////////////////////////////////////////////////
export async function loader(){
  var url = "https://reqres.in/api/users?page=2";
  var  response = await fetch(url);
  var json = await response.json();
  var userList = json.data;
  return userList;
}
//////////////////////////////////////////////////////////////////////////
export default Users;