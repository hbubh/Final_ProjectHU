import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import ROUTES from "../../routes/ROUTES";

export default function MediaCard({ thisTheme }) {
  const featuredPosts = [
    {
      title: "Oil in Russia",
      date: "Feb 12",
      description:
        "Oil prices rise against the background of the war in Russia",
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
      description: "More and more yo..",
      image:
        "https://th.bing.com/th/id/R.2c2d1a8129fae05b679e3c275ff67eeb?rik=r1DEi75Jc2EEKg&pid=ImgRaw&r=0",
      imageLabel: "Image Text",
    },
  ];

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Divider>
          <Typography
            variant="h2"
            sx={{
              fontWeight: "200",
              fontFamily: "-moz-initial",
              color: thisTheme ? "white" : "black",
            }}
            align="center"
          >
            Hot News Today
          </Typography>
        </Divider>
      </Grid>
      {featuredPosts.map((ta) => (
        <Grid item xs={3} key={ta.title}>
          <Card
            sx={{
              maxWidth: 345,
              color: thisTheme ? "aliceblue" : "black",
              bgcolor: thisTheme ? "darkgray" : "aliceblue",
            }}
          >
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {ta.title}
              </Typography>
              <Typography variant="body2" color="black">
                {ta.description}
              </Typography>
              <Typography variant="subtitle2" color="black">
                {ta.date}
              </Typography>
            </CardContent>
            <CardMedia
              sx={{ height: 140, boxShadow: "3px 3px 5px" }}
              image={ta.image}
              title="green iguana"
            />
            <Link to={ROUTES.NEWS} style={{ textDecoration: "none" }}>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Link>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
