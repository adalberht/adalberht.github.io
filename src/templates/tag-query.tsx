import React from "react";
import { graphql, PageProps } from "gatsby";
import TagComponent from "../components/tag";

export default ({ data, pageContext }) => {
  return <TagComponent posts={data.allPost.nodes} pageContext={pageContext} />;
};

export const query = graphql`
  query($slug: String!, $formatString: String!) {
    allPost(
      sort: { fields: date, order: DESC }
      filter: { tags: { elemMatch: { slug: { eq: $slug } } } }
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
