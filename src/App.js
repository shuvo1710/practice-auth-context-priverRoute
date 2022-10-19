
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import PrivetRoute from './PrivetRoute/PrivetRoute';
import About from './Components/About';
import Product from './Components/Product';


function App() {
  const router = createBrowserRouter([
    {path:'/',
     element:<Main></Main>,
     children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'about',
        element:<PrivetRoute><About></About> </PrivetRoute>
      },
      {
        path:'product',
        element:<PrivetRoute> <Product></Product></PrivetRoute>
      },
      {
        path:'signin',
        element:<Login></Login>
      },
      {
        path:'signup',
        element:<Register></Register>
      }
     ]
    }
  ])

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
      
    </div>
  );
}

export default App;
