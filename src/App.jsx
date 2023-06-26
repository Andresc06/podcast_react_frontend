import './App.css'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Home } from './pages/Home';
import { ServiceRequest } from './pages/ServiceRequest';
import { Thanks } from './pages/Thanks';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/solicitar-servicio",
    element: <ServiceRequest />,
  },
  {
    path: "/gracias",
    element: <Thanks />,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
