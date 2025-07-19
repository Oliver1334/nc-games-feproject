import "./css/App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainSection from "./components/MainSection";
import { Reviews } from "./components/ReviewList";
import { SingleReview } from "./components/SingleReview";
import { SignIn } from "./components/SignIn";
import { AccountPage } from "./components/AccountPage";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<MainSection />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/reviews/:review_id" element={<SingleReview />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/account" element={<AccountPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

//styling overhaul

export default App;
