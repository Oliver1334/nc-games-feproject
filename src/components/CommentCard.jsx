

const CommentCard = ({ comment }) => {

    if (!comment) {
        return <li>Invalid Comment</li>; // Placeholder or error message
      }

    const {comment_id, body, review_id, author, votes, created_at} = comment;


return (
    <li>
        <article>
            <h3>{body}</h3>
            <h3>Posted by: {author}</h3>
            <h3>Votes: {votes}</h3>
        </article>
    </li>
)


}


export default CommentCard;
