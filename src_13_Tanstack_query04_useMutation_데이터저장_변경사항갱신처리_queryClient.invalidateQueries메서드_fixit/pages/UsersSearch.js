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

import { useRef} from 'react';

function UsersSearch(){

    const [searchPage, setSearchPage] = useState('');

    const searchElement = useRef();

    function handleSubmit(event){
       event.preventDefault();
       setSearchPage(searchElement.current.value);
    }

    //////////////////////////////////////////////
    const {data,isLoading, isError, error} = useQuery(
      { queryKey: ['todos',{page:searchPage}],  // 캐시 사용, 검색어에 해당하는 동적인 값으로 지정해야됨
        queryFn: ()=>fetchEvent(searchPage),
        staleTime:5000,       // 5초안에 다른작업이 끝나면 fetch 안되고
                            // 5초 이후에 다시 fetch가 동작됨.
       //gcTime:10000       // 10 초동안만 캐시정보 유지
        enabled: searchPage!==''  // page값을 입력했을때만 활성화

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
    //////////////////////////////////////////////

    return(
        <>
        <h2>UsersSearch</h2>
        <form onSubmit={handleSubmit}>
          page:<input type="text" ref={searchElement}/>
          <button>검색</button>
        </form>
        <p>
          {content}
        </p>
      </>
    );
}

export default UsersSearch;