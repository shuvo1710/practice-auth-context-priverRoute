
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import Home from './Components/Home';
import About from './Components/About';
import Product from './Components/Product';
import Login from './Components/Login';
import Register from './Components/Register';


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
        element:<About></About>
      },
      {
        path:'product',
        element:<Product></Product>
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
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
      
    </div>
  );
}

export default App;
