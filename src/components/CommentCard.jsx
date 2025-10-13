import React, { useState, useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { signInHandler } from "../api";

const CommentCard = ({ comment, onDelete }) => {
  const { user } = useContext(UserContext);
  const [authorPicture, setAuthorPicture] = useState("");

  if (!comment) return null;

  const { comment_id, body, author, votes } = comment;

  signInHandler(author).then((users) => {
    const commentAuthor = users.find((user) => user.username === author);
    console.log("Comment Author >", commentAuthor.avatar_url)
    setAuthorPicture(commentAuthor.avatar_url)
  })


  return (
    <li
      key={comment_id}
      className="flex space-x-3 bg-brandLightSecondary dark:bg-brandSecondary p-4 rounded-lg shadow-sm "
    >
      {/* Placeholder Avatar (you could add real avatars later) */}
      <div className="flex-shrink-0 w-10 h-10 rounded-lg overflow-hidden ">
  <img
    src={authorPicture}
    alt={author}
    className="w-10 h-10 object-cover rounded-lg border-2 border-brandPrimary"
  />
</div>

      {/* Comment Content */}
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold text-brandLightText dark:text-brandPrimary">
            {author}
          </span>
          <span className="text-xs text-brandLightText dark:text-brandText">
            {votes} votes
          </span>
        </div>

        <p className="text-brandLightText dark:text-brandText mt-1">{body}</p>

        {user.username === author && (
          <button
            onClick={() => onDelete(comment_id)}
            className="mt-2 text-xs text-red-500 hover:underline"
          >
            Delete
          </button>
        )}
      </div>
    </li>
  );
};

export default CommentCard;
