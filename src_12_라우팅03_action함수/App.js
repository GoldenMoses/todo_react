import logo from './logo.svg';
import './App.css';

import { createBrowserRouter, RouterProvider, json, redirect } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Users from './pages/Users';
import AddUser from './pages/AddUser';
import RootLayout from './pages/RootLayout';
import ErrorPage from './pages/ErrorPage';

const router = createBrowserRouter([
  {
    path:"/",
    element: <RootLayout />,
    errorElement:<ErrorPage />,
    children:[
      {
        path:"/",
        element:<Home />
      },
      {
        path:"/products",
        element:<Products />
      },
      {
        path:"/users",
        element: <Users />,
        loader: async function(){
           var url = "https://reqres.in/api/users?page=2";
           var  response = await fetch(url,{
               method:"PUT"
           });

           ////////////////////////////////////////////////
           console.log(response);
           if(!response.ok){
               // throw new Response("Not Found", { status: 404 });
               throw json({
                  message:'에러발생 statusText',
                  message2:'에러발생 data'
               },{status:500});
           }


           //////////////////////////////////////////////////
           var xxx = await response.json();
           var userList = xxx.data;
           return userList;
        }, 
      },
      {
        path:"/add-user",
        element:<AddUser />,
        action: async function({request}){
          let formData = await request.formData();

          
          let id = formData.get("id");
          let email = formData.get("email");
          let first_name = formData.get("first_name");
          let last_name = formData.get("last_name");
          console.log("id:", id);
          console.log("email:", email);
          console.log("first_name:", first_name);
          console.log("last_name:", last_name);

          //////////////////////////////////////////////////
          let user ={
             id:id,
             email:email,
             first_name:first_name,
             last_name:last_name
          };
          var url = `https://reqres.in/api/users`;
          var  response = await fetch(url,{
              method:'POST',
              headers: {
                  "Content-Type": "application/json",
                  // 'Content-Type': 'application/x-www-form-urlencoded',
                },
              body: JSON.stringify(user)
           });
      
           if(!response.ok){
              console.log("save Error 발생");
              //throw new Error("fetchUserList Error 발생")
              throw json({
                message:'에러발생 statusText',
                message2:'에러발생 data'
             },{status:500});
          }

          // 서버가 잘 동작되었는지 확인용
          var json = await response.json();
          var userList = json.data;
          console.log("save", response);

          /////////////////////////////////////////////////
          return redirect("/");
        }
      },
    ]
  }
  
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
