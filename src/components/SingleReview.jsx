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
    <div className="bg-brandLight dark:bg-brandDark">
    <section className="max-w-4xl mx-auto px-4 py-8 ">
      <article className="bg-brandLightSecondary dark:bg-brandSecondary rounded-lg shadow-md overflow-hidden">
        <img
          src={review_img_url}
          alt={title}
          className="w-full max-h-96 object-cover"
        />
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-2 text-brandLightText dark:text-brandPrimary">
            {title}
          </h2>
          <p className="text-sm text-brandLightText dark:text-brandText mb-4">
            Category: {category} · Designer: {designer} · Reviewed by:{" "}
            <span className="font-medium">{owner}</span>
          </p>
          <p className="text-brandLightText dark:text-brandText mb-6 whitespace-pre-line">
            {review_body}
          </p>

          <div className="flex items-center gap-4">
            <span className="text-brandLightText dark:text-brandPrimary font-medium">
              Votes: {votes + userVote}
            </span>
            <button
              onClick={onClick}
              disabled={userVote !== 0}
              className={`px-4 py-2 rounded-md font-semibold transition-colors duration-250  ${
                userVote !== 0
                  ? "bg-gray-400 cursor-not-allowed text-white"
                  : "bg-brandPrimary text-brandDark hover:bg-brandPrimaryDarker"
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

    </div>
  );
};
