import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export const CommentCard = ({ comment, onDelete }) => {
  const { user } = useContext(UserContext);

  if (!comment) {
    return <li className="text-gray-500">Invalid Comment</li>;
  }

  const { comment_id, body, author, votes } = comment;

  return (
    <li
      key={comment_id}
      className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md border border-gray-200 dark:border-gray-700"
    >
      {/* Comment Body */}
      <p className="text-gray-800 dark:text-gray-200 mb-2">{body}</p>

      {/* Author + Votes Row */}
      <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-2">
        <span>Posted by: <span className="font-medium">{author}</span></span>
        <span>Votes: {votes}</span>
      </div>

      {/* Delete Button (only if author) */}
      {user.username === author && (
        <button
          onClick={() => onDelete(comment_id)}
          className="mt-2 px-3 py-1 bg-red-500 hover:bg-red-600 text-white text-sm rounded-md transition-colors duration-200"
        >
          Delete
        </button>
      )}
    </li>
  );
};


