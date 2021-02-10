/** @jsx jsx */
import { jsx, Heading, Link as TLink } from "theme-ui";
import { Link } from "gatsby";
import { Flex } from "@theme-ui/components";
import Layout from "../layout";
import Listing from "../RecentBlogs";
import useMinimalBlogConfig from "../../hooks/use-minimal-blog-config";
import replaceSlashes from "../../utils/replaceSlashes";
import SEO from "../seo";

type PostProps = {
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
  className?: string;
};

type PostsProps = {
  posts: PostProps[];
  [key: string]: any;
};

const BlogPostItem = (props: PostProps) => (
  <a
    sx={{
      mt: [1, 1, 2],
      mb: [5, 5, 6],
      color: "text",
      textDecoration: `none`,
      ":hover": {
        h3: {
          color: "primary",
        },
        color: `heading`,
      },
      ":focus": {
        color: `heading`,
      },
    }}
    className={props.className}
    href={props.slug}
  >
    <div
      sx={{ color: "secondary" }}
    >{`${props.date} • ${props.timeToRead} min read`}</div>
    <h3 sx={{ mt: 1 }}>{props.title}</h3>
    {props.description && <div>{props.description}</div>}
    <p>{props.excerpt}</p>
    <div sx={{ textDecoration: "underline", mb: [4, 4, 5] }}>Read more</div>
  </a>
);

const Blog = ({ posts }: PostsProps) => {
  const { tagsPath, basePath } = useMinimalBlogConfig();

  return (
    <Layout>
      <SEO title="Blog" />
      <Flex
        sx={{
          alignItems: `center`,
          justifyContent: `space-between`,
          flexFlow: `wrap`,
        }}
      >
        <Heading as="h1" variant="styles.h1" sx={{ marginY: 3 }}>
          Recent Posts
        </Heading>
        <TLink
          as={Link}
          sx={{ variant: `links.secondary`, marginY: 2 }}
          to={replaceSlashes(`/${basePath}/${tagsPath}`)}
        >
          View all tags
        </TLink>
      </Flex>
      <div sx={{ mt: [2, 2, 3] }}>
        {posts.map((post) => (
          <BlogPostItem {...post} />
        ))}
      </div>
    </Layout>
  );
};

export default Blog;
