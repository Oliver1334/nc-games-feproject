import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const CommentCard = ({ comment, onDelete }) => {
  const { user } = useContext(UserContext);

  if (!comment) {
    return <li>Invalid Comment</li>;
  }

  const { comment_id, body, author, votes } = comment;

  return (
    <li key={comment_id}>
      <article>
        <h3>{body}</h3>
        <h3>Posted by: {author}</h3>
        <h3>Votes: {votes}</h3>
        {user.username === author && ( // Check if signed-in user is the author
          <button onClick={() => onDelete(comment_id)}>Delete</button>
        )}
      </article>
    </li>
  );
};

export default CommentCard;
