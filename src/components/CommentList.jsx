import React, { useState, useEffect, useContext } from "react";
import { getCommentsById, postCommentHandler, deleteCommentHandler } from "../api";
import CommentCard from "./CommentCard";
import { UserContext } from "../contexts/UserContext";

const CommentList = ({ review_id }) => {
  const { user } = useContext(UserContext);
  const [comments, setComments] = useState([]);
  const [inputComment, setInputComment] = useState("");
  const [commentError, setCommentError] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isPosting, setIsPosting] = useState(false);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const data = await getCommentsById(review_id);
        setComments(data.comments);
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
    if (inputComment.length < 2) {
      setCommentError(true);
      return;
    }
    setButtonDisabled(true);
    setIsPosting(true);
    try {
      const comments = await postCommentHandler({
        review_id,
        user: user.username,
        inputComment,
      });
  
      // Assuming postCommentHandler returns an array, update state correctly
      if (Array.isArray(comments) && comments.length > 0) {
        setComments((currentComments) => [comments[0], ...currentComments]);
      }
  
      setButtonDisabled(false);
      setInputComment("");
      setIsPosting(false);
    } catch (error) {
      console.error("Failed to post comment:", error);
      setButtonDisabled(false);
      setIsPosting(false);
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
    return <p>Loading comments...</p>;
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
        {commentError && (
          <span id="comment-length-error" className="error-box">
            <p>Comments must contain at least 2 characters. Please try again!</p>
          </span>
        )}
      </form>
      {isPosting && <p>Posting your comment...</p>}
      <section id="comment-list">
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
