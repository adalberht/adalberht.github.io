import { graphql } from "gatsby";
import HomepageComponent from "../components/pages/homepage";

export default HomepageComponent;

export const query = graphql`
  query {
    allPost(sort: { fields: date, order: DESC }, limit: 3) {
      nodes {
        slug
        title
        date
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
