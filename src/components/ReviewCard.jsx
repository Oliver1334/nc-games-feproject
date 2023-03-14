import {Link} from 'react-router-dom';

const ReviewCard = ({ review }) => {

    const { category, comment_count, created_at, designer, owner, review_img_url, title, votes} = review;
    return (
        <li>
            <article>
                <img src={review_img_url} alt="" />
                <h3>Title: {title} </h3>
                <h3>Designer: {designer}</h3>
                <h3>Review by: {owner}</h3>
                <h4>Category: {category}</h4>
                <h4>Votes: {votes}</h4>
                <h4>Comments: {comment_count}</h4>
                <div>
                <button>Read Review</button>
                </div>
            </article>
        </li>
    )
}


export default ReviewCard;