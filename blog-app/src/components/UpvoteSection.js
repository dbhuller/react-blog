import React from "react";

const UpvoteSection = ({ articleName, upvotes, setArticleInfo }) => {
  const upvoteArticle = async () => {
    const result = await fetch(`/api/articles/${articleName}/upvote`, {
      method: "post",
    });
    const body = await result.json();
    setArticleInfo(body);
  };
  return (
    <div>
      <button onClick={() => upvoteArticle()}>Upvote</button>
      <p>This post has {upvotes} upvotes</p>
    </div>
  );
};

export default UpvoteSection;
