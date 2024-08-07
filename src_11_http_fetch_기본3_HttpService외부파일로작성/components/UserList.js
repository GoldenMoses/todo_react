
function UserList({data}){

    return(data.map((row,idx)=>
                <tr key={idx}>
                  <td>{idx}</td>
                  <td><img src={row.avatar}/></td>
                  <td>{row.id}</td>
                  <td>{row.email}</td>
                  <td>{row.first_name}</td>
                </tr>
            )

    );
}

export {UserList};