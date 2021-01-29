/** @jsx jsx */
import { jsx } from "theme-ui";
import { Flex } from "@theme-ui/components";
import { Link } from "gatsby";
import Layout from "./layout";
import Title from "./title";
import Listing from "./listing";
import List from "./list";
import useMinimalBlogConfig from "../hooks/use-minimal-blog-config";
import useSiteMetadata from "../hooks/use-site-metadata";
import replaceSlashes from "../utils/replaceSlashes";
import { visuallyHidden } from "../styles/utils";
// @ts-ignore
import Hero from "../texts/hero";
// @ts-ignore
import Bottom from "../texts/bottom";

type PostsProps = {
  posts: {
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
  }[];
  [key: string]: any;
};

const Homepage = ({ posts }: PostsProps) => {
  const { basePath, blogPath } = useMinimalBlogConfig();
  const { siteTitle } = useSiteMetadata();

  return (
    <Layout>
      <h1 sx={visuallyHidden}>{siteTitle}</h1>
      <section
        sx={{
          mt: 6,
          mb: [5, 6, 7],
          p: { fontSize: [1, 2, 3], mt: 2 },
          variant: `section_hero`,
        }}
      >
        <Flex
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div sx={{ flex: 2 }}>
            <Hero />
          </div>
          <Flex
            sx={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src="me.jpg"
              alt="Albertus' Profile Picture"
              sx={{
                maxWidth: "100%",
                borderRadius: 999,
              }}
            />
          </Flex>
        </Flex>
      </section>
      <Title text="📝 Recent Posts">
        <Link to={replaceSlashes(`/${basePath}/${blogPath}`)}>
          Read all posts
        </Link>
      </Title>
      <Listing posts={posts} showTags={false} />
      <List sx={{ variant: `section_bottom` }}>
        <Bottom />
      </List>
    </Layout>
  );
};

export default Homepage;
