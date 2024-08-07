
function UserList({userList}){
    // const loader = useLoaderData();
    // console.log(loader);

    return(
        <>
        <h2>UserList</h2>
        <table>
        {
            userList.map((row,idx)=>
                <tr key={idx}>
                    <td>{row.id}</td>
                    <td>{row.email}</td>
                    <td>{row.first_name}</td>
                    <td><img src={row.avatar}/></td>
                </tr>
        )}
        </table>
        </>
    );
}

export default UserList;