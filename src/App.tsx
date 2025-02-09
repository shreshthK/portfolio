import PictureCard from './components/PictureCard'
import Hero from './sections/Hero/Hero'
import Projects from './sections/Projects/Projects'
import Skills from './sections/Skills/Skills'
import './App.css'

function App() {
  return (
    <>
      <Hero />
      <Skills />
      <Projects />
      <PictureCard title="Incredible accommodation for your team" desc="Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of
              places to do just that." url="./background.jpg" />
    </>
  )
}

export default App
