import logo from './logo.svg';
import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from './pages/Home';
import Products from './pages/Products';
import { RootLayout } from './pages/RootLayout';


const router = createBrowserRouter([
              {
                path: "/",
                element: <RootLayout/>,
                children:[
                  {
                    path: "/",
                    element:<Home/>
                  },
                  {
                    path:"/products",
                    element:<Products/>
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
