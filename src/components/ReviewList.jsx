
import React, { useContext, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom"; 
import { categorySelectHandler } from "../api";
import { CategoryContext } from "../contexts/CategoryContext";
import { ReviewCard } from "./ReviewCard";
import { Loading } from "./Loading";
import "../css/Reviews.css";
import "../css/App.css"

export const Reviews = () => {
  const { category, setCategory } = useContext(CategoryContext);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sort, setSort] = useState("created_at");
  const [order, setOrder] = useState("ASC");

  const location = useLocation();
  const navigate = useNavigate();

useEffect(() => {
  const params = new URLSearchParams(location.search);
  const categoryParam = params.get("category") || "All";
  const sortParam = params.get("sort_by") || "created_at";
  const orderParam = params.get("order") || "ASC";

  setSelectedCategory(categoryParam);
  setSort(sortParam);
  setOrder(orderParam);

  setLoading(true);
  categorySelectHandler(categoryParam, sortParam, orderParam)
  .then((data) => {
    setCategory(data);
    setLoading(false);
  })
  .catch((err) => console.log(err));
}, [location.search, setCategory]);

const handleCategoryChange = (event) => {
  const newCategory = event.target.value;
  setSelectedCategory(newCategory);
  updateUrl(newCategory, sort, order);
};

const handleSortChange = (event) => {
  const newSortOption = event.target.value;
  setSort(newSortOption);
  updateUrl (selectedCategory, newSortOption, order);
};

const handleOrderChange = (event) => {
  const newOrder = event.target.value;
  setOrder(newOrder);
  updateUrl(selectedCategory, sort, newOrder);
};

  const updateUrl = (category, sort, order) => {
    navigate(`/reviews?category=${category}&sort_by=${sort}&order=${order}`, { replace: true });
  };
  

  if (loading) {
    return <Loading />;
  } else {
    return (
      <div className="reviews">
        <div className="reviews-nav">
          <h2>Reviews</h2>
          <form className="selectors">
            <label htmlFor="category-dropdown">Search by Topic: </label>
            <select id="category-dropdown" value={selectedCategory} onChange={handleCategoryChange}>
              <option key="All" value="All">All</option>
              <option key="strategy" value="strategy">Strategy</option>
              <option key="hidden-roles" value="hidden-roles">Hidden Roles</option>
              <option key="dexterity" value="dexterity">Dexterity</option>
              <option key="push-your-luck" value="push-your-luck">Push Your Luck</option>
              <option key="roll-and-write" value="roll-and-write">Roll and Write</option>
              <option key="deck-building" value="deck-building">Deck Building</option>
              <option key="engine-building" value="engine-building">Engine Building</option>
            </select>

            <label htmlFor="sort-dropdown">Sort by: </label>
            <select id="sort-dropdown" value={sort} onChange={handleSortChange}>
              <option key="created_at" value="created_at">Date Created</option>
              <option key="comment_count" value="comment_count">Comment Count</option>
              <option key="review_id" value="review_id">Review ID</option>
              <option key="title" value="title">Title</option>
              <option key="category" value="category">Category</option>
              <option key="designer" value="designer">Game Designer</option>
              <option key="owner" value="owner">Review Author</option>
              <option key="votes" value="votes">Votes</option>
            </select>

            <label htmlFor="order-dropdown">Order: </label>
            <select id="order-dropdown" value={order} onChange={handleOrderChange}>
              <option key="ASC" value="ASC">Ascending</option>
              <option key="DESC" value="DESC">Descending</option>
            </select>
          </form>
        </div>

        <ul className="listed-reviews">
          {category.map((review) => {
            return (
              <li key={review.review_id} className="review-card">
                <ReviewCard review={review} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
};


