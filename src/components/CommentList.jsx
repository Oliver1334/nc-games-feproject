
import { getCommentsById } from '../api';
import { useState, useEffect } from 'react';
import CommentCard from './CommentCard';

const CommentList = (passed_id) => {
    const {review_id} = passed_id
    console.log(review_id)


const [comments, setComments] = useState([])

console.log(comments)

useEffect(() => {
    getCommentsById(review_id).then((results) => {
        setComments(results);
    })
}, [])


if (!comments) return <p>Loading...</p>

return (
    <section id="comment-list">
        <ul value={comments.length}>
            {comments.map((element) => {
                return <CommentCard key={element.comment_id} comment={element}/>
            })}
        </ul>
    </section>
)



}

export default CommentList;