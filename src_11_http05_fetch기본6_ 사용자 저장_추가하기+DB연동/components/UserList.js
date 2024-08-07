

function UserList({data, onRemove}){
    
   //삭제
  function handleRemove(id){
   console.log("UserList.handleRemove", id);
    onRemove(id);
  }

    return(
        <table border="1">
         <thead>
           <tr>
             <th>id</th>
             <th>email</th>
             <th>first_name</th>
             <th>avatar</th>
             <th>삭제</th>
           </tr>
           </thead>
           <tbody>
            {
               data.map((row,idx)=>
               <tr key={idx}>
                  <td>{row.id}</td>
                  <td>{row.email}</td>
                  <td>{row.first_name}</td>
                  <td><img src={row.avatar} width={100} height={100} alt="" /></td>
                  <td><button onClick={()=>handleRemove(row.id)}>삭제</button></td>
               </tr>
            ) 
            }
           </tbody>
       </table>
    );
}

export default   UserList;