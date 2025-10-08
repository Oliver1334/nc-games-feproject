import { useParams } from "react-router-dom";
import { getReviewById, voteForReview } from "../api";
import { useState, useEffect } from "react";
import { Loading } from "./Loading";
import CommentList from "./CommentList";

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

  if (loading) return <Loading label="Fetching review..." />;

  return (
    <section className="max-w-4xl mx-auto px-4 py-8">
      <article className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
        <img
          src={review_img_url}
          alt={title}
          className="w-full max-h-96 object-cover"
        />
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-gray-100">
            {title}
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Category: {category} · Designer: {designer} · Reviewed by:{" "}
            <span className="font-medium">{owner}</span>
          </p>
          <p className="text-gray-800 dark:text-gray-200 mb-6 whitespace-pre-line">
            {review_body}
          </p>

          <div className="flex items-center gap-4">
            <span className="text-gray-700 dark:text-gray-300 font-medium">
              Votes: {votes + userVote}
            </span>
            <button
              onClick={onClick}
              disabled={userVote !== 0}
              className={`px-4 py-2 rounded-md font-semibold transition-colors ${
                userVote !== 0
                  ? "bg-gray-400 cursor-not-allowed text-white"
                  : "bg-blue-500 hover:bg-blue-600 text-white"
              }`}
            >
              Vote
            </button>
          </div>

          {isVotingErr && (
            <p className="mt-2 text-red-500 font-medium">Vote not applied!</p>
          )}
        </div>
      </article>

      {/* Comments Section */}
      <div className="mt-10">
        <CommentList review_id={review_id} />
      </div>
    </section>
  );
};
