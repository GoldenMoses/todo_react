import {useEffect, useState} from 'react';
import UserList  from './UserList.js';
import { fetchEvent } from '../http/HttpService.js';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'


function Users(){

   // TanStack query
  // useQuery는 조회할 때 사용
  const {data,isLoading, isError, error} = useQuery(
    { queryKey: ['todos'],  // 캐시 사용
      queryFn: fetchEvent,
      staleTime:5000,       // 5초안에 다른작업이 끝나면 fetch 안되고
                          // 5초 이후에 다시 fetch가 동작됨.
      gcTime:10000       // 10 초동안만 캐시정보 유지
    }
    )

   //화면출력 코드
    let content;
    if(isLoading){
      content = "로딩중입니다.";
    }
    if(isError){
      content = "에러 발생됨";
    }
    if(data){
      content= <UserList data={data}/> 
    }
    return(
        <>
        <h2>Users</h2>
        {content}
      </>
    );
}

export default Users;