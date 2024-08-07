
import { useLoaderData } from "react-router-dom";
function UserList({userList}){
    return(
      <>
        <h2>UserList</h2>
        <table border="1">
           <tr>
             <th>id</th>
             <th>email</th>
             <th>first_name</th>
             <th>avatar</th>
           </tr>
       {
          userList.map((row, idx)=>
              <tr key={idx}>
                 <td>{row.id}</td>
                 <td>{row.email}</td>
                 <td>{row.first_name}</td>
                 <td><img src={row.avatar} width={100} height={100} /></td>
              </tr>
          )
       }
       </table>
      </>
    );
}

export default UserList;