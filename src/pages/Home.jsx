import { FAQ } from "../components/FAQ/FAQ";
import { Footer } from "../components/Footer/Footer";
import { HeaderBar } from "../components/HeaderBar/HeaderBar";
import { Principal } from "../components/Principal/Principal";
import { Reviews } from "../components/Reviews/Reviews";
import { About } from "../components/About/About";

export function Home() {
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