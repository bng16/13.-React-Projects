import {RouterProvider,createBrowserRouter} from 'react-router-dom';
import NavBar from './components/NavBar';
import About from './components/About';
import Profile from './components/Profile';
import Lectures from './components/Lectures';



function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <NavBar />,
      errorElement: <div className='w-full h-screen bg-red-600 flex justify-center items-center'>
        <h1 className='font-bold text-5xl'>404-Not-Found-😥</h1>
      </div>,
      children: [
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
        {
          path: "/lectures",
          element: <Lectures />,
        },
      ]
    }
  ])
  

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
