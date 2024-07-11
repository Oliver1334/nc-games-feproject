import React, { useState, useEffect, useContext } from "react";
import {
  getCommentsById,
  postCommentHandler,
  deleteCommentHandler,
} from "../api";
import CommentCard from "./CommentCard";
import { UserContext } from "../contexts/UserContext";
import "../css/Comments.css";

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
      // Check if response is an array and has at least one element
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
      // Update the comments state by filtering out the deleted comment
      setComments((currentComments) =>
        currentComments.filter((comment) => comment.comment_id !== comment_id)
      );
    } catch (error) {
      console.error("Failed to delete comment:", error);
      // Optionally handle error state or display error message
    }
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="comments">
      <h3>Comments</h3>
      <form id="post-comment" onSubmit={submitComment}>
        <label htmlFor="comment-box">Join the Conversation!</label>
        <br />
        <textarea
          id="comment-box"
          onChange={typeComment}
          value={inputComment}
        ></textarea>
        <br />
        <button id="submit-comment" type="submit" disabled={buttonDisabled}>
          {buttonDisabled ? "Please Wait..." : "Post a Comment"}
        </button>
        {showSignInMessage && ( 
          <span id="comment-sign-in-message" className="error-box">
            <p>Please sign in to post a comment.</p>
          </span>
        )}
        {commentError && (
          <span id="comment-length-error" className="error-box">
            <p>
              Comments must contain at least 2 characters. Please try again!
            </p>
          </span>
        )}
      </form>

      <section id="comment-list" className="comments">
        <ul>
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

export default CommentList;
