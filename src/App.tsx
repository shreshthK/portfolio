import PictureCard from './components/PictureCard'
import Hero from './sections/Hero/Hero'
import Projects from './sections/Projects/Projects'
import Skills from './sections/Skills/Skills'
import Footer from './sections/Footer/Footer'
import { useEffect } from 'react'
import { Toaster } from "@/components/ui/toaster"
import { Toaster as Sonner } from "@/components/ui/sonner"
import Component from './components/DemoGraph/DemoGraph'
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
      <Hero />
      <Skills />
      {/* <Projects /> */}
      <Timeline />
      <Component />
      <PictureCard title="Incredible accommodation for your team" desc="Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of
              places to do just that." url="./background.jpg" />
      <Footer />
      <Toaster />
      <Sonner />
    </>
  )
}

export default App
