import React from "react";
import { graphql } from "gatsby";
import BlogComponent from "../components/pages/blog";

export default ({ data }) => (
  <BlogComponent posts={data.allPost.nodes} {...data} />
);

export const query = graphql`
  query($formatString: String!) {
    allPost(
      filter: { postType: { eq: "blog" } }
      sort: { fields: date, order: DESC }
    ) {
      nodes {
        slug
        title
        date(formatString: $formatString)
        excerpt
        timeToRead
        description
        tags {
          name
          slug
        }
      }
    }
  }
`;
