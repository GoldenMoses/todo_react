import {useEffect, useState} from 'react';
import UserList  from './UserList.js';
import { fetchEvent,fetchUserSave } from '../http/HttpService.js';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { Link, useNavigate } from 'react-router-dom';
import { queryClient } from './http/HttpService';

function UsersAdd(){

      const navigate = useNavigate();

  //////////////////////////////////////////////////////////////
  /// 즉시 호출 안되고 반드시 mutate 메서드를 호출해야 된다.
      const {mutate, isPending, isError, error, data} = useMutation({
        mutationFn:fetchUserSave,
        onSuccess:()=>{
          //변경사항 갱신
          queryClient.invalidateQueries(
            {
              queryKey: ['todos'],
            }
          )

          //성공시 리다이렉트
          navigate("/products");
        }
      });
  
  const [inputs, setInputs] = useState({
    id:"",
    email:"",
    first_name:"",
    last_name:"",
    avatar: "https://reqres.in/img/faces/12-image.jpg"
  });

  function handleSubmit(e){
    e.preventDefault();
   console.log("inputs:", inputs);

   mutate(inputs);
  }
  function handleChange(e){
    var new_inputs={...inputs, [e.target.name]:e.target.value}
    setInputs(new_inputs);
    console.log(e.target.value);
    console.log(new_inputs);
    let content;
    if(isPending){
      content = "로딩중입니다.";
    }
    if(isError){
      content = "에러 발생됨";
    }
    if(data){
      content= <UserList data={data}/> 
    }

//////////////////////////////////////////////////////////////

   }


    return(
        <>
        <h2>UsersAdd</h2>
        <form onSubmit={handleSubmit}>
            id :          <input type="text" name="id" onChange={handleChange} value={inputs.id}/><br/>
            e-mail :      <input type="text" name="email" onChange={handleChange} value={inputs.email}/><br/>
            first_name :  <input type="text" name="first_name" onChange={handleChange} value={inputs.first_name}/><br/>
            last_name :   <input type="text" name="last_name" onChange={handleChange} value={inputs.last_name}/>
            <button>save</button>
          </form>
      </>
    );
}

export default UsersAdd;