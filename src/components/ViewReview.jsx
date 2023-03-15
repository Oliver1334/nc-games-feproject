import { useParams } from 'react-router-dom';
import { getReviewById } from '../api';
import { useState, useEffect } from 'react';

const ViewReview = () => {
    const { review_id } = useParams();

    const [review, setReview] = useState({})

    useEffect(() => {
        getReviewById(review_id).then((results) => {
            setReview(results)
            console.log(results)
        })
    }, []);

const {category, created_at, designer, owner, review_body, review_img_url, title, votes } = review;

    return (
        <section>
            <article>
                <img src={review_img_url} alt="" />

                <h3>{title}</h3>
                <h3>Category: {category}</h3>
                <h3>Designer: {designer}</h3>
                <h3>Reviewed by: {owner}</h3>
                <p>
                    {review_body}
                </p>
                <h4>Votes: {votes}</h4>
                <button>Vote</button>
            </article>
        </section>
    )
}

export default ViewReview;