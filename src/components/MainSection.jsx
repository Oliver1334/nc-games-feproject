import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../css/MainSection.css";
import { UserContext } from "../contexts/UserContext";
import { ReviewsCarousel } from "./ReviewsCarousel";

const MainSection = () => {
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
      title: "Build your own tour de Yorkshire",
      link: "/articles/6",
    },
  ];
  const { user } = useContext(UserContext);

  return (
    <div>
      {/* Black bar under the header */}

      <div className="main-nav">
        <h2>Featured Reviews</h2>
        <div className="user-status">
          {user.username ? (
            <>
              <img
                className="homepage-avatar"
                src={user.avatar_url}
                alt={user.username}
              />
              <p className="user-greeting">Welcome {user.username}!</p>
            </>
          ) : (
            <>
              <p className="user-greeting">Welcome Guest!</p>
              <p>Please sign in to access more features</p>
            </>
          )}
        </div>
      </div>
      <div className="homeEditorWrapper">
        <div className="homeCarouselWrapper">
          <ReviewsCarousel slides={slides} />
        </div>
      </div>
      <div className="read-more">
        <p>
          Want to read more?{" "}
          <Link to="/reviews" id="home-read-more">
            Click here to browse all reviews!
          </Link>
        </p>
      </div>
    </div>
  );
};

export default MainSection;
