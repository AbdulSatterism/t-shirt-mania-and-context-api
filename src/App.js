import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Outlet/Main';
import Home from './components/Home/Home';
import Orders from './components/Orders/Orders';
import Grand from './components/Grand/Grand';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: async () => {
            return fetch('tshirt.json')
          },
          element: <Home></Home>
        },
        {
          path: '/context',
          element: <Grand></Grand>
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
