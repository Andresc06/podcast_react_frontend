import './App.css'

import { Footer } from './components/Footer/Footer'
import { FAQ } from './components/FAQ/FAQ'
import { HeaderBar } from './components/HeaderBar/HeaderBar'
import { Principal } from './components/Principal/Principal'
import { Reviews } from './components/Reviews/Reviews'
import { About } from './components/About/About'
import { Pricing } from './components/Pricing/Pricing'
import { Categories } from './components/Categories/Categories'

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
    </>
  )
}

export default App
