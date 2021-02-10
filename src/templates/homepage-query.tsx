import React from "react";
import { graphql } from "gatsby";
import HomepageComponent from "../components/pages/homepage";

export default ({ data }) => {
  return <HomepageComponent posts={data.allPost.nodes} {...data} />;
};

export const query = graphql`
  query($formatString: String!) {
    allPost(
      filter: { postType: { eq: "blog" } }
      sort: { fields: date, order: DESC }
      limit: 3
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
