import { useParams } from "react-router-dom";
import { getReviewById, voteForReview } from "../api";
import { useState, useEffect } from "react";
import { CommentList } from "./CommentList";
import { Loading } from "./Loading";

export const SingleReview = () => {
  const { review_id } = useParams();
  const [review, setReview] = useState({});
  const [loading, setLoading] = useState(true);
  const [userVote, setUserVote] = useState(0);
  const [isVotingErr, setIsVotingErr] = useState(false);

  const onClick = () => {
    setIsVotingErr(false);
    setUserVote(1);
    voteForReview(review_id).catch(() => {
      setUserVote(0);
      setIsVotingErr(true);
    });
  };

  useEffect(() => {
    setLoading(true);
    getReviewById(review_id).then((results) => {
      setReview(results);
      setLoading(false);
    });
  }, [review_id]);

  const {
    category,
    designer,
    owner,
    review_body,
    review_img_url,
    title,
    votes,
  } = review;

  if (loading) return <Loading />;

  return (
    <section className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl overflow-hidden">
        {/* Image */}
        <div className="w-full h-72 overflow-hidden">
          <img
            src={review_img_url}
            className="w-full h-full object-cover"
            alt={title}
          />
        </div>

        {/* Review Info */}
        <div className="p-6">
          <h3 className="text-3xl font-bold mb-3">{title}</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-1">
            Category: <span className="font-medium">{category}</span>
          </p>
          <p className="text-gray-600 dark:text-gray-300 mb-1">
            Designer: <span className="font-medium">{designer}</span>
          </p>
          <p className="text-gray-500 dark:text-gray-400 mb-4">
            Reviewed by: {owner}
          </p>

          <p className="text-gray-700 dark:text-gray-200 leading-relaxed mb-6">
            {review_body}
          </p>

          {/* Votes */}
          <h4 className="text-lg font-semibold mb-2">
            Votes: {votes + userVote}
          </h4>
          <button
            onClick={onClick}
            disabled={userVote !== 0}
            className={`px-4 py-2 rounded-md font-semibold transition-colors duration-200 ${
              userVote !== 0
                ? "bg-gray-400 cursor-not-allowed text-white"
                : "bg-blue-500 hover:bg-blue-600 text-white"
            }`}
          >
            Vote
          </button>
          {isVotingErr && (
            <p className="text-red-600 mt-2 font-medium">Vote not applied!</p>
          )}
        </div>
      </div>

      {/* Comments */}
      <div className="mt-10">
        <CommentList review_id={review_id} />
      </div>
    </section>
  );
};
