import React from "react";

const CommentCard = ({ comment, onDelete }) => {
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
        {onDelete && (
          <button onClick={() => onDelete(comment_id)}>Delete</button>
        )}
      </article>
    </li>
  );
};

export default CommentCard;
