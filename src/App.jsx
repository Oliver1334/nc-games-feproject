import React from "react";
import {useState, useEffect} from "react";
import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import Footer from "./components/Footer";
import { Reviews } from "./components/ReviewList";
import { SingleReview } from "./components/SingleReview";
import { SignIn } from "./components/SignIn";
import { AccountPage } from "./components/AccountPage"
import { WelcomeModal } from "./components/WelcomeModal";

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
      <WelcomeModal />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/reviews/:review_id" element={<SingleReview />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/account" element={<AccountPage />} />
      </Routes>

      <Footer />
    </>
    
  );
}

export default App;
