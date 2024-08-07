import logo from './logo.svg';
import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";


const router = createBrowserRouter([
              {
                path: "/",
                element: <h1>Casa Blanca</h1>,
              },
              {
                path: "/xxx",
                element: <h2>Veritas Lux Mea</h2>,
              },
]);


function App() {
  return (  
    <RouterProvider router={router}/>
  );
}

export default App;
