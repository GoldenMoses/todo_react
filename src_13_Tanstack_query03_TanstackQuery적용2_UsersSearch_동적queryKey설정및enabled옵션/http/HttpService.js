
// select 용
var fetchEvent = async function(searchParam){

    //Users 클릭시 전달되는 파라미터는 (queryKey:['todos'],meta: )임
    //UsersSearch 클릭시 입력시킨 page 값이 전달됨.
    console.log("searchParam:",searchParam);
    console.log("fetchEvent 용");

    var url = "https://reqres.in/api/users";
    
    if(searchParam.queryKey){
      url+="?page=2";
    }else{
      url+=`?page=${searchParam}`
    }
    //에러 처리
    var  response = await fetch(url, { method:"get"}); // 명시적으로 예외발생은 put으로 설정
    if(!response.ok){
      throw new Error("에러발생");
    }

    var json = await response.json();
    var userList = json.data;
    return userList;
 };

 // insert 용
 // update 용
 // delete 용


export {fetchEvent}