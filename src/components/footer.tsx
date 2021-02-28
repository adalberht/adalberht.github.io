/** @jsx jsx */
import { jsx, Link } from "theme-ui";
import useSiteMetadata from "../hooks/use-site-metadata";

const Footer = () => {
  const { siteTitle } = useSiteMetadata();

  return (
    <footer
      sx={{
        boxSizing: `border-box`,
        display: `flex`,
        justifyContent: `space-between`,
        alignItems: [`center`, `center`, `flex-end`],
        mt: [6],
        a: {
          variant: `links.secondary`,
        },
        flexDirection: [`column-reverse`, `column-reverse`, `row`],
        textAlign: [`center`, `center`, `left`],
        variant: `dividers.top`,
      }}
    >
      <div
        sx={{
          display: `flex`,
          flexDirection: `column`,
          justifyContent: `space-between`,
          alignItems: `space-between`,
        }}
      >
        <div
          sx={{ fontStyle: "italic", color: "secondary", fontSize: "0.8rem" }}
        >
          Disclaimer: <br />
          All writings here are my own and do not represent any of my current
          and past employer.
        </div>
        <div sx={{ fontSize: [1, 1, 1], color: `secondary` }}>
          &copy; {new Date().getFullYear()} by {siteTitle}. All Rights Reserved.
        </div>
      </div>
      <div
        sx={{
          pr: [0, 0, 6],
          a: {
            mt: 1,
            mb: 1,
          },
          mb: [3, 3, 0],
        }}
      >
        <h4 sx={{ mb: [1, 1, 3] }}>Links</h4>
        <div sx={{ display: `flex`, flexDirection: `column` }}>
          <a href="/rss.xml">RSS</a>
          <a href="https://www.twitter.com/albertusdev">Twitter</a>
          <a href="https://www.github.com/albertusdev">GitHub</a>
          <a href="https://www.linkedin.com/in/albertusdev">LinkedIn</a>
          <a href="mailto:hello@albertus.dev">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
