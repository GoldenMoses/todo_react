
import { Form } from "react-router-dom";
import UserList from "./UserList";

function AddUser(){


    return(
      <>
        <h2>AddUser</h2>
         {/* 폼데이터 */}
        <Form method="post">
           id:<input type="text" name="id" /><br/>
           email:<input type="text" name="email"  /><br/>
           first_name:<input type="text" name="first_name" /><br/>
           last_name:<input type="text" name="last_name" /><br/>
           <button>save</button>
        </Form>
      </>
    );
}

export default AddUser;