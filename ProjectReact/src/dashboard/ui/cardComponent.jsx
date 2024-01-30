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
import featuredPosts from "../../pages/news/ui/subMain";

export default function MediaCard({ thisTheme }) {
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  let featuredPost = [];
  if (randomNumber === 1) {
    featuredPost = featuredPosts[0];
  }
  if (randomNumber === 2) {
    featuredPost = featuredPosts[1];
  }
  if (randomNumber === 3) {
    featuredPost = featuredPosts[2];
  }

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
      {featuredPost.map((ta) => (
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
