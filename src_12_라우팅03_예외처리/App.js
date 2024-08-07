import './App.css';

import { createBrowserRouter, RouterProvider, json} from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Users from './pages/Users';
import RootLayout from './pages/RootLayout';
import ErrorPage from './pages/ErrorPage';

const router = createBrowserRouter([
  {
    path:"/",
    element: <RootLayout />,
    errorElement: <ErrorPage/>,
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
            method:"PUT"}
           );
           /////////////////////////////////////////////////////
           console.log(response);
           if(!response.ok){
            // throw new Response("Not Found", {status:404});
            throw json({
              //ErrorPage에 텍스트 전달
              message:'ERROR 발생 statusText',
              message2:"ERROR 발생 data"
            },{status:500});
           }

           /////////////////////////////////////////////////////
           var jsons = await response.json();
           var userList = jsons.data;
           return userList;
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
