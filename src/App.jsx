import './App.css'

import { Footer } from './components/Footer/Footer'
import { FAQ } from './components/FAQ/FAQ'
import { HeaderBar } from './components/HeaderBar/HeaderBar'
import { Principal } from './components/Principal/Principal'
import { Reviews } from './components/Reviews/Reviews'
import { About } from './components/About/About'

function App() {

  return (
    <>
    <HeaderBar />
    <Principal />
    <About />
      <FAQ />
      <Reviews />
      <Footer />
    </>
  )
}

export default App
