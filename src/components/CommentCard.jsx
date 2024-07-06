import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import "../css/CommentCard.css"

const CommentCard = ({ comment, onDelete }) => {
  const { user } = useContext(UserContext);

  if (!comment) {
    return <li>Invalid Comment</li>;
  }

  const { comment_id, body, author, votes } = comment;

  return (
    <li key={comment_id}>
      <div className="comment-card">
        <p>{body}</p>
        <p className="comment-author">Posted by: {author}</p>
        <p>Votes: {votes}</p>
        {user.username === author && ( // Check if signed-in user is the author
          <button onClick={() => onDelete(comment_id)}>Delete</button>
        )}
      </div>
    </li>
  );
};

export default CommentCard;
