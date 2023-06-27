import { FAQ } from "../components/FAQ/FAQ";
import { Footer } from "../components/Footer/Footer";
import { HeaderBar } from "../components/HeaderBar/HeaderBar";
import { Principal } from "../components/Principal/Principal";
import { Categories } from "../components/Categories/Categories";
import { Pricing } from "../components/Pricing/Pricing";
import { Reviews } from "../components/Reviews/Reviews";
import { About } from "../components/About/About";

export function Home() {
  return (
    <>
      <HeaderBar />
      <Principal />
      <About />
      <Categories />
      <Pricing />
      <FAQ />
      <Reviews />
      <Footer />
    </>
  )
}