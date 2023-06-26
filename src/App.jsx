import './App.css'

import { Footer } from './components/Footer/Footer'
import { FAQ } from './components/FAQ/FAQ'
import { HeaderBar } from './components/HeaderBar/HeaderBar'
import { Principal } from './components/Principal/Principal'
import { Reviews } from './components/Reviews/Reviews'
import { About } from './components/About/About'
import { Pricing } from './components/Pricing/Pricing'
import { Categories } from './components/Categories/Categories'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
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
    <>
    <HeaderBar />
    <Principal />
    <About />
    <Pricing />
    <FAQ />
    <Categories />
    <Reviews />
    <Footer />
    <RouterProvider router={router} />
    </>
  )
}

export default App
