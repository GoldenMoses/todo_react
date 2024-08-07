



function UserList({data, onRemove}){

    function handleRemove(id){
      console.log("UserList.handleRemove",id);
      onRemove(id);
    }
    return(
      <div className="App">
      <table border="0">
        <thead>
        <tr>
          <th>ID</th>
          <th>Avatar</th>
          <th>1st Name</th>
          <th>e-m@il</th>
          <th>Fired</th>
        </tr>
        </thead>
        <tbody>
      {data.map((row,idx)=>
                <tr key={idx}>
                  <td><img src={row.avatar} alt=""/></td>
                  <td>{row.id}</td>
                  <td>{row.first_name}</td>
                  <td>{row.email}</td>
                  <td><button onClick={()=>handleRemove(row.id)}>해고</button></td>
                </tr>
            )}
            </tbody>
        </table>
    </div>
  );
}

export default UserList;