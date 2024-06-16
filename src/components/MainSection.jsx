// import { useState } from 'react';
// import { Routes, Route, useResolvedPath, Link } from 'react-router-dom'
// import ReviewList from './ReviewList'
// import ViewReview from './ViewReview'
// import CatFilter from './CatFilter'
// import { SignIn } from "./SignIn"
// import { AccountPage } from './AccountPage';

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../css/MainSection.css";
import { UseContext, UserContext } from "../contexts/UserContext";
import { ReviewsCarousel } from "./ReviewsCarousel";

const MainSection = () => {
  //     const [category, setCategory] = useState("")
  //     const { pathname } = useResolvedPath();

  // return (
  //     <main>
  //          {pathname === "/" ? (
  //     <div id="category-selector">
  //         <CatFilter setCategory={setCategory} />
  //     </div>
  //  ) : (
  //     ""
  // )}

  //         <Routes>
  //         <Route path="/signin" element={<SignIn />} />
  //         <Route path="/account" element={<AccountPage />} />
  //             <Route path="/" element={<ReviewList category={category} />}/>
  //             <Route path="/reviews/:review_id" element={<ViewReview />} />
  //         </Routes>
  //     </main>
  // )

  const slides = [
    {
      src: "https://images.pexels.com/photos/4691579/pexels-photo-4691579.jpeg?w=700&h=700",
      title: "Super Rhino Hero",
      link: "/reviews/10",
    },
    {
      src: "https://images.pexels.com/photos/4200740/pexels-photo-4200740.jpeg?w=700&h=700",
      title: "Scythe; you're gonna need a bigger table!",
      link: "/articles/8",
    },
    {
      src: "https://images.pexels.com/photos/5439508/pexels-photo-5439508.jpeg?w=700&h=700",
      title: "Escape The Dark Castle",
      link: "/articles/23",
    },
    {
      src: "https://images.pexels.com/photos/258045/pexels-photo-258045.jpeg?w=700&h=700",
      title: "Build you own tour de Yorkshire",
      link: "/articles/6",
    },
  ];
  const { user } = useContext(UserContext);

  return (
    <div className="homepage">
      {user.username ? (
        <div className="user-homepage">
          <img
            className="homepage-avatar"
            srs={user.avatar_url}
            alt={user.username}
          />
          <p className="user-greeting">Welcome {user.username}!</p>
        </div>
      ) : (
        <>
          <p className="user-greeting">Welcome Guest!</p>
          <p>Please log in to access more features</p>
        </>
      )}
      <div className="homeEditorWrapper">
        <h2>Editor's Picks</h2>
        <div className="homeCarouselWrapper">
          <ReviewsCarousel slides={slides} />
        </div>
      </div>
      <div>
        <p>
          Want to read more?{" "}
          <Link to="/reviews" id="home-read-more">
            Click here to browse all articles!
          </Link>
        </p>
      </div>
    </div>
  );
};

export default MainSection;

// Hello
