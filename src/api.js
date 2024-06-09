import axios from "axios";
const ncGamesApi = axios.create({
  baseURL: "https://nc-games-2kfx.onrender.com/api",
});

export const fetchReviews = (category = null) => {
  const filterURL = category ? `?category=${category}` : "";

  return ncGamesApi.get(`/reviews${filterURL}`).then((results) => {
    return results.data.reviews;
  });
};

export const fetchCats = () => {
  return ncGamesApi.get("/categories").then((results) => {
    return results.data.categories;
  });
};

export const getReviewById = (id) => {
  return ncGamesApi.get(`/reviews/${id}`).then((result) => {
    return result.data.review;
  });
};

export const getCommentsById = (id) => {
  return ncGamesApi.get(`/reviews/${id}/comments`).then((res) => {
    return res.data;
  });
};

export const postCommentHandler = ({ review_id, user, inputComment }) => {
  console.log(user)
  console.log(review_id)
  console.log(inputComment)
  return ncGamesApi.post(`/reviews/${review_id}/comments`, {
      username: user,
      body: inputComment,
    })
    .then((res) => {
      console.log(res);
      return res.data.comment;
    })
    .catch((err) => {
      console.log(err, "<err");
    });
};

export const voteForReview = (review_id) => {
  return ncGamesApi
    .patch(`/reviews/${review_id}`, { inc_votes: 1 })
    .then(({ data }) => {
      return data.review;
    });
};
