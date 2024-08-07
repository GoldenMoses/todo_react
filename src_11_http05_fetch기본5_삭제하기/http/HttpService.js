


export async function fetchUserList(n){

    var url = `https://reqres.in/api/users?page=${n}`;
      var response = await fetch(url,{
      });
      if(!response.ok){
        console.log("fetchUserList Error 발생");
        throw new Error("fetchUserList Error 발생")
      }
      var json = await response.json();
      var userList = json.data;

      return userList;
    };

export async function fetchUserSave(){

};

export async function fetchUserUpdate(){

};