import './App.css';

import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Users,{loader as UserLoader} from './pages/Users';
import RootLayout from './pages/RootLayout';

const router = createBrowserRouter([
  {
    path:"/",
    element: <RootLayout/>,
    id:'root',
    loader: async function(){
      var url = "https://reqres.in/api/users?page=1";
      var  response = await fetch(url);
      var json = await response.json();
      var userList = json.data;
      return userList;
    },
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
        loader: UserLoader
        /////////////////////////////////////////////////////////////
 
        /////////////////////////////////////////////////////////////
      }
    ]
  }
  
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
