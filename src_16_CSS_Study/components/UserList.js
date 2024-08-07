

function UserList({data, onRemove}){
    
   //삭제
  function handleRemove(id){
   console.log("UserList.handleRemove", id);
    onRemove(id);
  }

    return(
        <table style={{width:"60%"}}>
         <thead style={{borderBottom:"1px solid white"}}>
           <tr >
             <th></th>
             <th>id</th>
             <th>first_name</th>
             <th className="tab">email</th>
             <th>Dispatch</th>
           </tr>
           </thead>
           <tbody>
            {
               data.map((row,idx)=>
               <tr key={idx}>
                  <td><div style={{border:"2px solid white", borderRadius:"50px", height:"100px", width:"100px" }}><img src={row.avatar} alt="" /></div></td>
                  <td>{row.id}</td>
                  <td>{row.first_name}</td>
                  <td className="tab">{row.email}</td>
                  <td><button onClick={()=>handleRemove(row.id)}>Fire</button></td>
               </tr>
            ) 
            }
           </tbody>
       </table>
    );
}

export default   UserList;