import { useParams } from 'react-router-dom';
import { getReviewById, voteForReview } from '../api';
import { useState, useEffect } from 'react';
import CommentList from './CommentList';
import "../css/SingleReview.css"

const ViewReview = () => {
    const { review_id } = useParams();
    const [review, setReview] = useState({})
    const [loading, setLoading] = useState(true)
    const [userVote, setUserVote] = useState(0);
    const [isVotingErr, setIsVotingErr] = useState(false);



    const onClick = () => {
        setIsVotingErr(false);
        setUserVote(1);
        voteForReview(review_id).catch(() => {
            setUserVote(0);
            setIsVotingErr(true);
        })
    }

    useEffect(() => {
        setLoading(true);
        getReviewById(review_id).then((results) => {
            setReview(results);
            setLoading(false);
        })
    }, [review_id]);

const {category, designer, owner, review_body, review_img_url, title, votes } = review;


if (loading) return <p>Loading...</p>

    return (
        <section>
            <article >
                <div className='single-review'>

                <img src={review_img_url} className='single-image' alt={title} />

                <h3>{title}</h3>
                <p>Category: {category}</p>
                <p>Designer: {designer}</p>
                <p className='author-data'>Reviewed by: {owner}</p>
                <p>
                    {review_body}
                </p>
                <h4>Votes: {votes + userVote}</h4>
                <button onClick={onClick} disabled={userVote !== 0}>Vote</button>
                {isVotingErr && <p>Vote not applied!</p>}
                </div>
            </article>
            <br/>
            <br/>
            <div>
                <h2> Comments </h2>
            </div>
            <CommentList review_id = {review_id}/>
        </section>
    )
}

export default ViewReview;