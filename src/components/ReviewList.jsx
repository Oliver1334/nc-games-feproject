import React, { useContext, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { categorySelectHandler } from "../api";
import { CategoryContext } from "../contexts/CategoryContext";
import { ReviewCard } from "./ReviewCard";
import { Loading } from "./Loading";

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
    updateUrl(selectedCategory, newSortOption, order);
  };

  const handleOrderChange = (event) => {
    const newOrder = event.target.value;
    setOrder(newOrder);
    updateUrl(selectedCategory, sort, newOrder);
  };

  const updateUrl = (category, sort, order) => {
    navigate(`/reviews?category=${category}&sort_by=${sort}&order=${order}`, {
      replace: true,
    });
  };

  if (loading) return <Loading label="Fetching reviews..." />;

  return (
    <div className="bg-brandLight dark:bg-brandDark">
    <div className="max-w-7xl mx-auto px-4 py-6 bg-brandLight dark:bg-brandDark">
      <div className="reviews flex flex-col lg:flex-row gap-6">
        {/* Sorting Menu */}
        <aside className="w-full lg:w-72 bg-brandLightSecondary dark:bg-brandSecondary p-4 rounded-xl shadow-md mb-6 lg:mb-0 order-1 lg:order-2 self-start">
          <h2 className="text-xl font-semibold mb-4 text-brandLightText dark:text-brandPrimary">Filter & Sort</h2>

          <div className="flex flex-col lg:flex-col gap-4">
            <div className="flex flex-row gap-2 lg:flex-col ">
              {/* Category */}
              <div className="flex-1">
                <label
                  htmlFor="category-dropdown"
                  className="block text-sm font-medium mb-1 text-brandLightText dark:text-brandPrimary"
                >
                  Category
                </label>
                <select
                  id="category-dropdown"
                  value={selectedCategory}
                  onChange={handleCategoryChange}
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="All">All</option>
                  <option value="strategy">Strategy</option>
                  <option value="hidden-roles">Hidden Roles</option>
                  <option value="dexterity">Dexterity</option>
                  <option value="push-your-luck">Push Your Luck</option>
                  <option value="roll-and-write">Roll and Write</option>
                  <option value="deck-building">Deck Building</option>
                  <option value="engine-building">Engine Building</option>
                </select>
              </div>

              {/* Sort by */}
              <div className="flex-1">
                <label
                  htmlFor="sort-dropdown"
                  className="block text-sm font-medium mb-1 text-brandLightText dark:text-brandPrimary"
                >
                  Sort by
                </label>
                <select
                  id="sort-dropdown"
                  value={sort}
                  onChange={handleSortChange}
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="created_at">Date Created</option>
                  <option value="comment_count">Comment Count</option>
                  <option value="review_id">Review ID</option>
                  <option value="title">Title</option>
                  <option value="category">Category</option>
                  <option value="designer">Game Designer</option>
                  <option value="owner">Review Author</option>
                  <option value="votes">Votes</option>
                </select>
              </div>

              {/* Order */}
              <div className="flex-1">
                <label
                  htmlFor="order-dropdown"
                  className="block text-sm font-medium mb-1 text-brandLightText dark:text-brandPrimary"
                >
                  Order
                </label>
                <select
                  id="order-dropdown"
                  value={order}
                  onChange={handleOrderChange}
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="ASC">Ascending</option>
                  <option value="DESC">Descending</option>
                </select>
              </div>
            </div>
          </div>
        </aside>

        {/* Review Cards */}
        <ul className="listed-reviews grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr flex-1 order-2 lg:order-1">
          {category.map((review) => (
            <li key={review.review_id} className="w-full h-full">
              <ReviewCard review={review} />
            </li>
          ))}
        </ul>
      </div>
    </div>
    </div>
  );
};
