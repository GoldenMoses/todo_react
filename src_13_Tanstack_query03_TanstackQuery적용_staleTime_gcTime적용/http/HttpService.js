

// select 용
var fetchEvent= async function (){
 
    console.log("fetchEvent 용"); // testquery는 해시로 동작하기 때문에 비동기적으로 자동으로 싱크를 맞춰줌 (다른 화면 갔다와도 재호출함)
    
    var url = "https://reqres.in/api/users?page=2";
    var response = await fetch(url, { method:"get"}); // 명시적으로 예외발생은 put으로 설정

     //에러 처리
     if(!response.ok){
       throw new Error("에러발생");
     }

     var json = await response.json();
     var userList = json.data;
     return userList;
    };

  //insert용
  //update용
  //delete용

  

  export {fetchEvent}