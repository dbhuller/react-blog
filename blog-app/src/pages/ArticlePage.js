import React from "react";
import articleContent from "./article-content";
import ArticlesList from "../components/ArticlesList";
import articles from "./article-content";

const ArticlePage = ({ match }) => {
  const name = match.params.name;
  const article = articleContent.find((article) => article.name === name);

  if (!article) return <h1>Article Does Not Exist!</h1>;

  const otherArticles = articleContent.filter(
    (articles) => articles.name !== name
  );

  return (
    <>
      <h1>{article.title}</h1>
      {article.content.map((paragraph, key) => (
        <p key={key}>{paragraph}</p>
      ))}
      <h3>Related Articles</h3>
      <ArticlesList articles={otherArticles} />
    </>
  );
};

export default ArticlePage;
