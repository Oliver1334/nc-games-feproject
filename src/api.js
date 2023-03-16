import axios from 'axios';

const ncGamesApi = axios.create({
    baseURL: "https://nc-games-2kfx.onrender.com/api/"
});

export const fetchReviews = (category = null) =>{

const filterURL = (category) ? `?category=${category}` : '';

    return ncGamesApi.get(`/reviews${filterURL}`).then((results) => { 
        return results.data.reviews; 
    })
};

export const fetchCats = () => {
    return ncGamesApi.get("/categories")
    .then((results) => {
        return results.data.categories;
    })
}

export const getReviewById = (id) => {

    return ncGamesApi.get(`/reviews/${id}`)
    .then((result) => {
        return result.data.review
    })
}

export const getCommentsById = (id) => {

    return ncGamesApi.get(`/reviews/${id}/comments`)
    .then(({data}) => {
        return data.comments
    })
}

export const voteForReview = (review_id) => {
    return ncGamesApi.patch(`/reviews/${review_id}`, {inc_votes: 1})
    .then(({data}) => {
        return data.review;
    });
}