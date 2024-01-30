import * as React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import MainFeaturedPost from "./MainFeaturedPost.jsx";
import FeaturedPost from "./FeaturedPost.jsx";
import Main from "./Main.jsx";
import Sidebar from "./Sidebar.jsx";
import post1 from "./blog-post1";
import post2 from "./blog-post2";

const mainFeaturedPost = {
  title: "Jerome Powell does not 'disappoint'",
  description:
    "The chairman of the Federal Reserve raises interest rates for the fifth time in a row",
  image:
    "https://th.bing.com/th/id/R.f5a8929a82bf85e0332fbf618219cd8a?rik=wYCeulfeQfcAzw&pid=ImgRaw&r=0",
  imageText: "main image description",
  linkText: "Continue reading…",
};

const featuredPosts = [
  {
    title: "Oil in Russia",
    date: "Feb 12",
    description: "Oil prices rise against the background of the war in Russia",
    image:
      "https://media.licdn.com/dms/image/C5612AQHcwng9vDAfaw/article-cover_image-shrink_600_2000/0/1633608757917?e=2147483647&v=beta&t=83yqErWHe4UgFyKeEIjt0rdlN5Jkf6gilh2gx_9Rtxg",
    imageLabel: "Image Text",
  },
  {
    title: "AI : the next step",
    date: "Jan 03",
    description:
      "The start-up companies report large waves of layoffs following the artificial intelligence solution",
    image:
      "https://onpassivenews.us/wp-content/uploads/2021/05/ai_artificial_intelligence_ml_machine_learning_vector_by_kohb_gettyimages_1146634284-100817775-large-1024x683.jpg",
    imageLabel: "Image Text",
  },
  {
    title: "Banks GrowUP",
    date: "Jan 23",
    description:
      "A sharp increase in mortgages leads to improved results in the bank index",
    image:
      "https://www.emergingrisks.co.uk/wp-content/uploads/2020/10/Bank-ofengland-Fotolia_116011036_600px.jpg",
    imageLabel: "Image Text",
  },
  {
    title: "For The Kids: luxury cars please",
    date: "Jan 23",
    description:
      "More and more young people are taking large loans to buy luxury cars",
    image:
      "https://th.bing.com/th/id/R.2c2d1a8129fae05b679e3c275ff67eeb?rik=r1DEi75Jc2EEKg&pid=ImgRaw&r=0",
    imageLabel: "Image Text",
  },
];

const posts = [post1, post2 /* post3 */];

const sidebar = {
  title: "About",
  description:
    "All publications on this page are a figment of the imagination of the website developer and everything that is said here should not be taken as true",
};

const Blog = () => {
  return (
    <Container maxWidth="lg" sx={{ paddingTop: "10%" }}>
      <main>
        <MainFeaturedPost post={mainFeaturedPost} />
        <Grid container spacing={4}>
          {featuredPosts.map((post) => (
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
