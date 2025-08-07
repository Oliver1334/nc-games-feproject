import React from "react";
import {useState, useEffect} from "react";
import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import Footer from "./components/Footer";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true); // false means light mode

  useEffect (() => {
    if(isDarkMode) {
      // add a dark class to the html element
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  })

  function toggleDarkMode() {
    setIsDarkMode(prevMode => !prevMode); //this switches the mode true <-> false
  }

  return (
    < >

      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>

      <Footer />
    </>
    
  );
}

export default App;
