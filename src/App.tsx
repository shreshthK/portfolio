import Hero from './sections/Hero/Hero'
import Skills from './sections/Skills/Skills'
import Projects from './sections/Projects/Projects'
import Footer from './sections/Footer/Footer'
import { useEffect } from 'react'
import { Toaster } from "@/components/ui/sonner"
import Navbar from './sections/Navbar/Navbar'
import "preline/preline";
import { IStaticMethods } from "preline/preline";
declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}
import Timeline from './components/Timeline/Timeline'
import Hobbies from './components/Hobbies'

import './App.css'

function App() {
  useEffect(() => {
    window.HSStaticMethods.autoInit();
    document.title = "Shreshth Kandari | Senior Software Developer";
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Timeline />
        <Projects />
        <Hobbies />
      </main>
      <Toaster />
      <Footer />
    </>
  )
}

export default App
