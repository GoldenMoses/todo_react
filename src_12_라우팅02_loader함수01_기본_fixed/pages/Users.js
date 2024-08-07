
import { useLoaderData } from "react-router-dom";
import UserList from "./UserList";

function Users(){

    const data = useLoaderData();
    console.log("useLoaderData", data);

    return(
      <>
        <h2>Users</h2>
        <UserList userList={data}/>
      </>
    );
}

export default Users;