import {useEffect, useState} from 'react';
import {fetchReviews} from '../api'
import ReviewCard from './ReviewCard'

const ReviewList = ({category}) => {
const [reviews, setReviews] = useState(null)


useEffect(() => {
    fetchReviews(category).then((results) => {
        setReviews(results);
    });
}, [reviews]);


if (!reviews) return <p>Loading...</p>

    return (
        <section id="review-list">
           <ul value={reviews.length}>
            {reviews.map((element) => {
                return <ReviewCard key={element.review_id} review={element} />
            })}
           </ul>
        </section>
    ) 
}

export default ReviewList;