import React from "react";
import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import Footer from "./components/Footer";

function App() {
  return (
    < >

      <Navbar />

      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>

      <Footer />
    </>
    
  );
}

export default App;
