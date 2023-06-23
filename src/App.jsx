import './App.css'
import { FAQ } from './components/FAQ/FAQ'
import { HeaderBar } from './components/HeaderBar/HeaderBar'
import { Principal } from './components/Principal/Principal'
import { Reviews } from './components/Reviews/Reviews'

function App() {

  return (
    <>
    <HeaderBar />
    <Principal />
      <h1 >
        Hi there!
      </h1>
      <FAQ />
      <Reviews />
    </>
  )
}

export default App
