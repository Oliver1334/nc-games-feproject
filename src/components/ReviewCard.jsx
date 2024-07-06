import React from 'react';
import {Link} from 'react-router-dom';


export const ReviewCard = ({ review }) => {
    const previewReview = review.review_body.substring(0, 100) + "...";
    const previewShortReview = review.review_body.substring(0, 50) + "...";

    const createdAtDate = new Date(review.created_at);

    const formattedDate = `${createdAtDate.getDate().toString().padStart(2, '0')}-${(createdAtDate.getMonth() + 1).toString().padStart(2, '0')}-${createdAtDate.getFullYear()}`;
    
    const { category, comment_count, designer, owner, review_img_url, title, votes, review_id} = review;

    return (
        
            <article>
                <img src={review_img_url} alt="{title}" className='review-card-img' />
                <h3>Title: {title} </h3>
            {title.length < 48 ? <p>{previewReview}</p> : <p>{previewShortReview}</p>}

                <h3>Review by: {owner}</h3>
                <h3>Designer: {designer}</h3>
                <h4>Category: {category}</h4>
                <h4>Posted on {formattedDate}</h4>
                <h4>Votes: {votes}</h4>
                <h4>Comments: {comment_count}</h4>
                <div>
                <Link to={`/reviews/${review_id}`}>
                <button>Read Review</button>
                </Link>
                </div>
            </article>
        
    )
};


