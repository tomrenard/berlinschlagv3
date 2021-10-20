import React from 'react';
import { graphql } from 'gatsby';

export default function index({ data }) {
  const articles = data.articles.nodes;
  return (
    <div>
      {articles.map((article, idx) => (
        <div key={idx}>
          <p>{article.author.name}</p>
          <p>{article.title}</p>
        </div>
      ))}
    </div>
  );
}

export const query = graphql`
  query {
    articles: allSanityPost {
      nodes {
        title
        author {
          name
        }
        categories {
          title
        }
        body {
          children {
            text
          }
        }
      }
    }
  }
`;
