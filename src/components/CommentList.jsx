import React, { useState, useEffect, useContext } from "react";
import {
  getCommentsById,
  postCommentHandler,
  deleteCommentHandler,
} from "../api";
import { UserContext } from "../contexts/UserContext";
import CommentCard from "./CommentCard";

const CommentList = ({ review_id }) => {
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
        setComments(data?.comments || []);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching comments:", error);
        setComments([]);
        setIsLoading(false);
      }
    };

    fetchComments();
  }, [review_id]);

  const typeComment = (e) => {
    setCommentError(false);
    setInputComment(e.target.value);
  };

  const submitComment = async (e) => {
    e.preventDefault();
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
        setComments((prev) => [response[0], ...prev]);
      }
    } catch (error) {
      console.error("Failed to post comment:", error);
      setButtonDisabled(false);
    }
  };

  const handleDelete = async (comment_id) => {
    try {
      await deleteCommentHandler(comment_id);
      setComments((prev) => prev.filter((c) => c.comment_id !== comment_id));
    } catch (error) {
      console.error("Failed to delete comment:", error);
    }
  };

  if (isLoading) {
    return <p className="text-gray-500 dark:text-gray-400">Loading comments...</p>;
  }

  return (
    <div>
      <h3 className="text-xl font-bold mb-4 text-brandLightText dark:text-brandPrimary">
        {comments.length} Comments
      </h3>

      {/* Post Comment Box */}
      <form
        onSubmit={submitComment}
        className="mb-6 flex flex-col space-y-3 bg-brandLightSecondary dark:bg-brandSecondary p-4 rounded-lg shadow-sm"
      >
        <textarea
          placeholder="Add a comment..."
          value={inputComment}
          onChange={typeComment}
          rows="3"
          className="w-full p-3 border border-gray-300 rounded-md resize-none focus:ring-2 focus:ring-brandPrimary/70 focus:outline-none bg-brandLight  text-brandLightText"
        ></textarea>

        <div className="flex justify-end">
          <button
            type="submit"
            disabled={buttonDisabled}
            className={`px-4 py-2 rounded-md font-semibold transition-colors ${
              buttonDisabled
                ? "bg-gray-400 text-white cursor-not-allowed"
                : "bg-brandPrimary text-brandDark hover:bg-brandPrimaryDarker cursor-pointer duration-250"
            }`}
          >
            {buttonDisabled ? "Posting..." : "Comment"}
          </button>
        </div>

        {showSignInMessage && (
          <p className="text-red-600 text-sm">
            Please sign in to post a comment.
          </p>
        )}
        {commentError && (
          <p className="text-red-600 text-sm">
            Comments must contain at least 2 characters.
          </p>
        )}
      </form>

      {/* Comments List */}
      <ul className="space-y-4">
        {comments.map((comment) => (
          <CommentCard
            key={comment.comment_id}
            comment={comment}
            onDelete={user.username === comment.author ? handleDelete : null}
          />
        ))}
      </ul>
    </div>
  );
};

export default CommentList;
