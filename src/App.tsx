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
  }, []);

  return (
    <>
      <head>
        <title>Shreshth Kandari | Senior Software Developer</title>
        <meta name="description" content="Professional portfolio showcasing full-stack development skills, experience in WoW raiding, and passion for cooking and travel." />
        <meta name="keywords" content="full stack developer, web development, React, TypeScript, World of Warcraft" />
        <meta name="author" content="Shreshth Kandari" />
        <meta property="og:title" content="Shreshth Kandari - Professional Portfolio" />
        <meta property="og:description" content="Professional portfolio showcasing full-stack development skills, experience in WoW raiding, and passion for cooking and travel." />
        <meta property="og:image" content="/path-to-your-og-image.jpg" />
        <meta property="og:url" content="https://your-portfolio-url.com" />
        <link rel="canonical" href="https://your-portfolio-url.com" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "http://schema.org",
            "@type": "shreshthkandari",
            "name": "Shreshth Kandari",
            "url": "https://your-portfolio-url.com",
            "sameAs": [
              "https://github.com/shreshthk",
              "https://www.linkedin.com/in/shreshth-kandari-7ab84959/"
            ],
            "jobTitle": "Full Stack Developer",
            "worksFor": {
              "@type": "Organization",
              "name": "wabtec"
            }
          })}
        </script>
      </head>
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
