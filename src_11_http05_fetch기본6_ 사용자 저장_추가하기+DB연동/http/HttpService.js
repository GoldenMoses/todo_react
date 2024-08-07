

export async function fetchUserList(n){

    var url = `https://reqres.in/api/users?page=${n}`;

    var  response = await fetch(url,{
       method:'GET'
    });

    if(!response.ok){
        console.log("fetchUserList Error 발생");
        throw new Error("fetchUserList Error 발생")
    }


    var json = await response.json();
    var userList = json.data;
    return userList;
}

export async function fetchUserUpdate(){


}

//POST 및 PUT 요청은 
export async function fetchUserSave(user){
    var url =`https://reqres.in/api/users?page=2`;
    var response = await fetch(url,{
        method:'POST',
        headers:{
            "Content-Type":"application/json",
            //`Content-Type`:`application/x-www-form-urlencoded`,
        },
        body: JSON.stringify(user)
    });

    if(!response.ok){
        console.log("fetchUserList Error 발생");
        throw new Error("fetchUserList Error 발생")
    }


    var json = await response.json();
    var userList = json.data;
    return userList;

}