import Image from "next/image";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import FAQ from "./components/FAQ";
import Pricing from "./components/Pricing";
import CTA from "./components/CTA";
import Footer from "./components/Footer";



export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <div className="px-[20px] lg:container lg:px-20 mx-auto">
        <Features />
        <FAQ />
        <Pricing />
        <CTA />
        <Footer />
      </div>

    </>
  )
}
