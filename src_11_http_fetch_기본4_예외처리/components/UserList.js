

function UserList({data}){
    return(
      <div className="App">
      <table border="0">
        <tr>
          <th>idx</th>
          <th>Avatar</th>
          <th>ID</th>
          <th>e-m@il</th>
          <th>1st Name</th>
        </tr>
      {data.map((row,idx)=>
                <tr key={idx}>
                  <td>{idx}</td>
                  <td><img src={row.avatar}/></td>
                  <td>{row.id}</td>
                  <td>{row.email}</td>
                  <td>{row.first_name}</td>
                </tr>
            )}
        </table>
    </div>
  );
}

export default UserList;