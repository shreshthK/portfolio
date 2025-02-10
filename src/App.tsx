import PictureCard from './components/PictureCard'
import Hero from './sections/Hero/Hero'
// import Projects from './sections/Projects/Projects'
import Skills from './sections/Skills/Skills'
import Footer from './sections/Footer/Footer'
import { useEffect } from 'react'
import { Toaster } from "@/components/ui/sonner"
import Component from './components/DemoGraph/DemoGraph'
import Navbar from './sections/Navbar/Navbar'
import "preline/preline";
import { IStaticMethods } from "preline/preline";
declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}
import Timeline from './components/Timeline/Timeline'

import './App.css'

function App() {
  useEffect(() => {
    window.HSStaticMethods.autoInit();
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      {/* <Projects /> */}
      <Timeline />
      <Component />
      <PictureCard title="World of Warcraft, Traveling, and Cooking with my wife" desc="I enjoy playing World of Warcraft, especially high end raiding. Have been part Top 30 US guild for past 5 years. I also enjoy traveling and exploring new places. I also enjoy cooking with my wife." url="./background.jpg" />
      <Toaster />
      <Footer />
    </>
  )
}

export default App
