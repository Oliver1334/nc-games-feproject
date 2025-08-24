import React, { useState, useEffect, useContext } from "react";
import {
  getCommentsById,
  postCommentHandler,
  deleteCommentHandler,
} from "../api";
import { CommentCard } from "./CommentCard";
import { UserContext } from "../contexts/UserContext";

export const CommentList = ({ review_id }) => {
  const { user, isLoggedIn } = useContext(UserContext);
  const [comments, setComments] = useState([]);
  const [inputComment, setInputComment] = useState("");
  const [commentError, setCommentError] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showSignInMessage, setShowSignInMessage] = useState(false);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const data = await getCommentsById(review_id);
        if (data && data.comments) {
          setComments(data.comments);
        } else {
          setComments([]);
        }
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching comments:", error);
        setComments([]);
        setIsLoading(false);
      }
    };

    fetchComments();
  }, [review_id]);

  const typeComment = (event) => {
    setCommentError(false);
    setInputComment(event.target.value);
  };

  const submitComment = async (event) => {
    event.preventDefault();
    if (!isLoggedIn) {
      setShowSignInMessage(true);
      return;
    }
    if (inputComment.length < 2) {
      setCommentError(true);
      return;
    }
    setButtonDisabled(true);
    try {
      const response = await postCommentHandler({
        review_id,
        user: user.username,
        inputComment,
      });
      setButtonDisabled(false);
      setInputComment("");
      if (Array.isArray(response) && response.length > 0) {
        setComments((currentComments) => [response[0], ...currentComments]);
      } else {
        console.error(
          "Invalid response format from postCommentHandler:",
          response
        );
      }
    } catch (error) {
      console.error("Failed to post comment:", error);
      setButtonDisabled(false);
    }
  };

  const handleDelete = async (comment_id) => {
    try {
      await deleteCommentHandler(comment_id);
      setComments((currentComments) =>
        currentComments.filter((comment) => comment.comment_id !== comment_id)
      );
    } catch (error) {
      console.error("Failed to delete comment:", error);
    }
  };

  if (isLoading) {
    return <p className="text-gray-600 dark:text-gray-300">Loading...</p>;
  }

  return (
    <div className="mt-6">
      <h3 className="text-2xl font-bold mb-4">Comments</h3>

      {/* Post Comment Form */}
      <form
        id="post-comment"
        onSubmit={submitComment}
        className="mb-6 bg-gray-50 dark:bg-gray-700 p-4 rounded-lg shadow-sm"
      >
        <label
          htmlFor="comment-box"
          className="block text-gray-700 dark:text-gray-200 font-medium mb-2"
        >
          Join the Conversation!
        </label>
        <textarea
          id="comment-box"
          onChange={typeComment}
          value={inputComment}
          className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
          rows="3"
        ></textarea>
        <button
          id="submit-comment"
          type="submit"
          disabled={buttonDisabled}
          className={`mt-3 px-4 py-2 rounded-md font-semibold transition-colors duration-200 ${
            buttonDisabled
              ? "bg-gray-400 cursor-not-allowed text-white"
              : "bg-blue-500 hover:bg-blue-600 text-white"
          }`}
        >
          {buttonDisabled ? "Please Wait..." : "Post a Comment"}
        </button>

        {/* Error / Sign-in Messages */}
        {showSignInMessage && (
          <p className="mt-3 text-red-600 font-medium">
            Please sign in to post a comment.
          </p>
        )}
        {commentError && (
          <p className="mt-3 text-red-600 font-medium">
            Comments must contain at least 2 characters. Please try again!
          </p>
        )}
      </form>

      {/* Comment List */}
      <section id="comment-list">
        <ul className="space-y-4">
          {comments.map((comment) => (
            <CommentCard
              key={comment.comment_id}
              comment={comment}
              onDelete={user.username === comment.author ? handleDelete : null}
            />
          ))}
        </ul>
      </section>
    </div>
  );
};


