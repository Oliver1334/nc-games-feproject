import { useState } from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar />
    <body className="bg-brandDark">
    <LandingPage />
    </body>
    <Footer />
    </div>
  )
}

export default App
