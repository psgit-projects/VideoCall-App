import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import Video from './components/Video'
const App = () => {

    const router = createBrowserRouter([
      {
      path:"/",
      element:<Home></Home>
    },
    {
      path:"/room/:id",
      element:<Video></Video>
    }
  ]
  )
  return (
   <div className='App'>
<RouterProvider router={router}>

</RouterProvider>
   </div>

  )
}
export default App