/** @jsx jsx */
import React from "react";
import { jsx, Link as TLink } from "theme-ui";
import { Box } from "@theme-ui/components";
import { Link } from "gatsby";
import ItemTags from "./item-tags";

type BlogListItemProps = {
  post: {
    slug: string;
    title: string;
    date: string;
    excerpt: string;
    description: string;
    timeToRead?: number;
    tags?: {
      name: string;
      slug: string;
    }[];
  };
  showTags?: boolean;
};

const BlogListItem = ({ post, showTags = true }: BlogListItemProps) => (
  <li>
    <Box mb={2}>
      <TLink
        as={Link}
        to={post.slug}
        sx={{
          fontSize: [2, 2, 3],
          color: `primary`,
          mb: 0,
          textDecoration: "underline",
        }}
      >
        {post.title}
      </TLink>
      <p
        sx={{
          color: `secondary`,
          mt: -1,
          a: { color: `secondary` },
          fontStyle: "italic",
          fontSize: [1, 1, 2],
        }}
      >
        {/* <time>{post.date}</time> */}
        {post.tags && showTags && (
          <React.Fragment>
            {`in: `}
            <ItemTags tags={post.tags} />
          </React.Fragment>
        )}
      </p>
    </Box>
  </li>
);

export default BlogListItem;
