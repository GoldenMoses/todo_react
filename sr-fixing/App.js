import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from './pages/Home';
import Products from './pages/Products';
import Users from './pages/Users';
import { RootLayout } from './pages/RootLayout';
import ErrorPage from './pages/ErrorPage';
const router = createBrowserRouter([
              {
                path: "/",
                element: <RootLayout/>,
                errorElement: <ErrorPage/>,
                children:[
                  {
                    path: "/",
                    element:<Home/>
                  },
                  {
                    path:"/products",
                    element:<Products/>
                  },
                  {
                    path:"/users",
                    element:<Users/>
                  }
                ]
              }
]);


function App() {
  return (  
    <RouterProvider router={router}/>
  );
}

export default App;