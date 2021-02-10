/** @jsx jsx */
import { jsx, Heading, Text } from "theme-ui";
import { MDXRenderer } from "gatsby-plugin-mdx";
import React from "react";
import Layout from "./layout";
import ItemTags from "./item-tags";
import SEO from "./seo";

type PostProps = {
  data: {
    post: {
      slug: string;
      title: string;
      date: string;
      tags?: {
        name: string;
        slug: string;
      }[];
      description?: string;
      canonicalUrl?: string;
      body: string;
      excerpt: string;
      timeToRead?: number;
      banner?: {
        childImageSharp: {
          resize: {
            src: string;
          };
        };
      };
    };
  };
};

const px = [`32px`, `16px`, `8px`, `4px`];
const shadow = px.map((v) => `rgba(0, 0, 0, 0.15) 0px ${v} ${v} 0px`);

const Post = ({ data: { post } }: PostProps) => {
  return (
    <Layout>
      <SEO
        title={post.title}
        description={post.description ? post.description : post.excerpt}
        image={post.banner ? post.banner.childImageSharp.resize.src : undefined}
        pathname={post.slug}
        canonicalUrl={post.canonicalUrl}
      />
      <div sx={{ mt: [3, 4, 5] }} />
      {post.tags && (
        <Text sx={{ textAlign: "center" }}>
          <ItemTags tags={post.tags} />
        </Text>
      )}
      <Heading as="h1" variant="styles.h1" sx={{ textAlign: "center", mt: 1 }}>
        {post.title}
      </Heading>
      <p
        sx={{
          color: `secondary`,
          mt: 3,
          a: { color: `secondary` },
          fontSize: [1, 1, 2],
          textAlign: "center",
        }}
      >
        <time>{post.date}</time>
        {post.timeToRead && ` — `}
        {post.timeToRead && <span>{post.timeToRead} min read</span>}
      </p>
      <section
        sx={{
          my: 5,
          ".gatsby-resp-image-wrapper": {
            my: [4, 4, 5],
            boxShadow: shadow.join(`, `),
          },
          variant: `layout.content`,
        }}
      >
        <MDXRenderer>{post.body}</MDXRenderer>
      </section>
    </Layout>
  );
};

export default Post;
