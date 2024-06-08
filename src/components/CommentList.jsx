import { getCommentsById, postCommentHandler } from "../api";
import { useState, useEffect } from "react";
import CommentCard from "./CommentCard";
import { UserContext } from "../contexts/UserContext"

const CommentList = (passed_id) => {
  const { review_id } = passed_id;
  const [comments, setComments] = useState([]);
  const [inputComment, setInputComment] = useState("");
  const [commentError, setCommentError] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const user = "jessjelly"

  console.log(comments);

  useEffect(() => {
    getCommentsById(review_id).then((results) => {
      setComments(results);
    });
  }, [review_id]);

  const typeComment = (event) => {
    setCommentError(false);
    setInputComment(event.target.value);
    console.log(inputComment);
  };

  const submitComment = (event) => {
    if (inputComment.length < 2) {
      setCommentError(true);
    } else {
      setButtonDisabled(true);
      postCommentHandler({ review_id, user, inputComment }).then(
        (returnedComment) => {
          setButtonDisabled(false);
          setInputComment("");
          setComments((currentComments) => {
            return [returnedComment, ...currentComments];
          });
        }
      );
    }
  };

  if (!comments) return <p>Loading...</p>;

  return (
    <div className="comments">
      <h3>Comments</h3>
      <form id="post-comment">
        <label htmlFor="comment-box">Join the Conversation!</label>
        <br />
        <textarea
          id="comment-box"
          onChange={typeComment}
          value={inputComment}
        ></textarea>
        <br />

        <button
          id="submit-comment"
          onClick={(event) => {
            event.preventDefault();
            submitComment();
          }}
          disabled={buttonDisabled}
        >
          {buttonDisabled ? "Please Wait..." : "Post a Comment"}
        </button>
          <span id="comment-length-error" className="error-box">
            {commentError ? (
                <p>
                    Comments must contain at least 2 characters. Please try again!
                </p>
            ) : null}
          </span>
      </form>

      <section id="comment-list">
        <ul value={comments.length}>
          {comments.map((element) => {
            return <CommentCard key={element.comment_id} comment={element} />;
          })}
        </ul>
      </section>
    </div>
  );
};

export default CommentList;
