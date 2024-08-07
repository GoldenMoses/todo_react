import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import UserList  from './UserList.js';
import { fetchEvent } from '../http/HttpService.js';


function Users(){

  //TanStack Query
  //query는 select/조회할 때 사용
  const {data, isLoading, isError, error} = useQuery(    //httpService의 fetchEvent 데이터를 받아옴
      { queryKey: ['todos'],  //서버에 안 갔다 오고 캐시에 저장됨, 여기 변수는 임의로 지정해도 됨
        queryFn: fetchEvent,  //여기 queryFn:에 함수 입력
        staleTime: 5000,      //5초가 지나야만 fetch를 함
        gcTime : 10000
      
      
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