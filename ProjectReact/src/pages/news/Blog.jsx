import * as React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import MainFeaturedPost from "./MainFeaturedPost.jsx";
import FeaturedPost from "./FeaturedPost.jsx";
import Main from "./Main.jsx";
import Sidebar from "./Sidebar.jsx";
import post1 from "./ui/blog-post1.js";
import post2 from "./ui/blog-post2.js";
import post3 from "./ui/blog-post3.js";
import post4 from "./ui/blog-post4.js";
import mainFeaturedPost from "./ui/main-post.js";
import featuredPosts from "./ui/subMain.js";

const randomNumber = Math.floor(Math.random() * 3) + 1;
let posts;
let mainFeatured;
let featuredPost = [];
if (randomNumber === 1) {
  posts = [post1, post2];
  mainFeatured = mainFeaturedPost[0];
  featuredPost = featuredPosts[0];
}
if (randomNumber === 2) {
  posts = [post3, post2];
  mainFeatured = mainFeaturedPost[1];
  featuredPost = featuredPosts[1];
}
if (randomNumber === 3) {
  posts = [post4, post2];
  mainFeatured = mainFeaturedPost[2];
  featuredPost = featuredPosts[2];
}

const sidebar = {
  title: "About",
  description:
    "All publications on this page are a figment of the imagination of the website developer and everything that is said here should not be taken as true",
};

const Blog = () => {
  return (
    <Container maxWidth="lg" sx={{ paddingTop: "10%" }}>
      <main>
        <MainFeaturedPost post={mainFeatured} />
        <Grid container spacing={4}>
          {featuredPost.map((post) => (
            <FeaturedPost key={post.title} post={post} />
          ))}
        </Grid>

        <Grid container spacing={5} sx={{ mt: 3 }}>
          <Main title="From the firehose" posts={posts} />
          <Sidebar title={sidebar.title} description={sidebar.description} />
        </Grid>
      </main>
    </Container>
  );
};
export default Blog;
