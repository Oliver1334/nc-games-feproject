import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const CommentCard = ({ comment, onDelete }) => {
  const { user } = useContext(UserContext);

  if (!comment) return null;

  const { comment_id, body, author, votes } = comment;

  return (
    <li
      key={comment_id}
      className="flex space-x-3 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700"
    >
      {/* Placeholder Avatar (you could add real avatars later) */}
      <div className="flex-shrink-0 w-10 h-10 bg-gray-300 dark:bg-gray-600 rounded-full"></div>

      {/* Comment Content */}
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold text-gray-800 dark:text-gray-100">
            {author}
          </span>
          <span className="text-xs text-gray-500 dark:text-gray-400">
            {votes} votes
          </span>
        </div>

        <p className="text-gray-800 dark:text-gray-200 mt-1">{body}</p>

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
