
import { useLoaderData } from "react-router-dom";
import UserList from "./UserList";

function UserMultiplePage(){

  const xxx = useLoaderData();
  console.log(xxx);

    return(
      <>
        <h2>UserMultiplePage</h2>

      </>
    );
}

export default UserMultiplePage;