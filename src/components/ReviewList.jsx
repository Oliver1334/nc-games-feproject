// import {useEffect, useState} from 'react';
// import {fetchReviews} from '../api'
// import ReviewCard from './ReviewCard'

// const ReviewList = ({category}) => {
// const [reviews, setReviews] = useState(null)

import React from "react";
import { useContext, useState, useEffect } from "react";
import { categorySelectHandler } from "../api";
import { CategoryContext } from "../contexts/CategoryContext";
import ReviewCard from "./ReviewCard";
import Loading from "./Loading";
import "../css/Articles.css";

export const Reviews = () => {
  const { category, setCategory } = useContext(TopicContext);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategory = (event) => {
    setSelectedCategory(event.target.value);
  };

  useEffect(() => {
    setLoading(true);
    categorySelectHandler(selectedTopic)
      .then((data) => {
        setCategory(data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [selectedCategory, setCategory]);

  if (loading === true) {
    return <Loading />;
  } else {
    return (
      <div className="articles">
        <div className="article-nav">
          <h2>Articles</h2>
          <form className="topic-selector">
            <label htmlFor="topic-dropdown">Search by Topic: </label>
            <select id="topic-dropdown" onChange={handleTopic}>
              <option key="All">All</option>
              <option key="strategy" value="strategy">
                Strategy
              </option>
              <option key="hidden-roles" value="hidden-roles">
                Hidden Roles
              </option>
              <option key="dexterity" value="dexterity">
                Dexterity
              </option>
              <option key="push-your-luck" value="push-your-luck">
                Push Your Luck
              </option>
              <option key="roll-and-write" value="roll-and-write">
                Roll and Write
              </option>
              <option key="deck-building" value="deck-building">
                Deck Building
              </option>
              <option key="engine-building" value="engine-building">
                Engine Building
              </option>
            </select>
          </form>
        </div>

        <ul className="listed-articles">
          {topic.map((review) => {
            return (
              <li key={ReviewCard.review_id} className="article-card">
                <ReviewCard review={review} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
};

// useEffect(() => {
//     fetchReviews(category).then((results) => {
//         setReviews(results);
//     });
// }, [reviews]);

// if (!reviews) return <p>Loading...</p>

//     return (
//         <section id="review-list">
//            <ul value={reviews.length}>
//             {reviews.map((element) => {
//                 return <ReviewCard key={element.review_id} review={element} />
//             })}
//            </ul>
//         </section>
//     )
// }

// export default ReviewList;
