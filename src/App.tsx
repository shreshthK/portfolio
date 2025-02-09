import { useState } from 'react'
import PictureCard from './components/card'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Hello world! sd wdsdsd sds
      </h1>
      <PictureCard title="Incredible accommodation for your team" desc="Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of
              places to do just that." url="../public/background.jpg" />
    </>
  )
}

export default App
