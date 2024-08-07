
// select 용
var fetchEvent = async function(){

    console.log("fetchEvent 용");

    var url = "https://reqres.in/api/users?page=2";
    var  response = await fetch(url, { method:"get"}); // 명시적으로 예외발생은 put으로 설정

    //에러 처리
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