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
  const [isLoading, setIsLoading] = useState(true); // Loading state
  const [reloadKey, setReloadKey] = useState(0); // Key to force component re-render
  // const [loading, setLoading] = useState(true);
  const user = "jessjelly"

  console.log(comments);

  // useEffect(() => {
  //   getCommentsById(review_id).then((data) => {
  //     setComments(data);
  //     // setLoading(false);
  //   });
  // }, [review_id]);

  useEffect(() => {
    // Function to fetch comments
    const fetchComments = async () => {
      try {
        const data = await getCommentsById(review_id);
        setComments(data.comments); // Set comments state with fetched data
        setIsLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error("Error fetching comments:", error);
        setComments([]); // If there's an error, set comments to an empty array
        setIsLoading(false); // Set loading to false on error
      }
    };

    fetchComments(); // Call the fetchComments function on component mount
  }, [review_id, reloadKey]);

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
          setReloadKey(reloadKey + 1);
          setComments((currentComments) => {
            return [returnedComment, ...currentComments];
          });
        }
      );
    }
  };

  if (!Array.isArray(comments)) {
    return <p>Loading...</p>;
  }

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
            console.log(element)
            return <CommentCard key={element.comment_id} comment={element} />;
          })}
        </ul>
      </section>
    </div>
  );
};


export default CommentList;
