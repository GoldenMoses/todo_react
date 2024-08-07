
import { useLoaderData } from "react-router-dom";

function UserSinglePage(){

    const loader = useLoaderData();
    console.log(loader);
    return(
        <>
            <h2>UserSinglePage</h2>
        
        <h2>UserList</h2>
        <table border="1">
            <tr>
                <td>id</td>
                <td>email</td>
                <td>first_name</td>
                <td>avatar</td>
            </tr>
            <tr>
                <td>{loader.id}</td>
                <td>{loader.email}</td>
                <td>{loader.first_name}</td>
                <td><img src={loader.avatar}/></td>
            </tr>
        </table>
        </>
    );
}

export default UserSinglePage;