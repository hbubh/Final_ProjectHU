import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Grid from "@mui/material/Grid";
import StarIcon from "@mui/icons-material/StarBorder";
import { useSelector } from "react-redux";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Container from "@mui/material/Container";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Inon Genish
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const tiers = [
  {
    title: "Basic - Invester",
    price: "0",
    description: ["Buying and selling of shares", "Access to the News panel"],
    buttonText: "Sign up for free",
    buttonVariant: "outlined",
    bgcContent: "white",
    sxCard: {},
    sxHead: { bgcolor: "darkblue", color: "white" },
  },
  {
    title: "Invester - Pro",
    subheader: "Most popular",
    price: "15",
    bgcContent: "white",
    description: [
      "Receiving analyst analyses",
      "Advanced tools for market analysis",
      "Latest news system",
      "Analysis of a case that includes giving recommendations for improvement",
    ],
    buttonText: "Get started",
    buttonVariant: "outlined",
    sxCard: {},
    sxHead: { bgcolor: "lightblue", color: "grey" },
  },
  {
    title: "Business - Organizations",
    price: "30",
    sxCard: {},
    bgcContent: "white",
    description: [
      "Issuance of shares",
      "Getting a help system for business owners",
      "All tools available for the Pro-plan",
    ],
    buttonText: "Get Started",
    buttonVariant: "outlined",
    sxHead: { bgcolor: "rgb(102, 152, 168)", color: "lightgrey" },
  },
];

const Pricing = () => {
  const thisTheme = useSelector((bigPie) => bigPie.themeSlice.darkTheme);
  return (
    <Box sx={{ width: "100%" }}>
      <Container
        disableGutters
        maxWidth="sm"
        component="main"
        sx={{ pt: 8, pb: 6 }}
      >
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
          sx={{ fontFamily: "-moz-initial" }}
        >
          Enter the family
        </Typography>
        <Typography
          variant="body1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Choose a plan that suits your needs to reach new achievements!
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container
        bgcolor={thisTheme ? "black" : "aliceblue"}
        sx={{
          width: "100%",
          height: { md: "40vh", lg: "60vh" },
          borderRadius: "20px",
          boxShadow: "2px 2px 4px",
        }}
      >
        <Grid container spacing={5} alignItems="flex-end" sx={{}}>
          {tiers.map((tier) => (
            <Grid
              item
              key={tier.title}
              xs={12}
              sm={tier.title === "Enterprise" ? 12 : 6}
              md={4}
              sx={{}}
            >
              <Card sx={tier.sxCard}>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: "center" }}
                  action={tier.title === "Invester - Pro" ? <StarIcon /> : null}
                  subheaderTypographyProps={{
                    align: "center",
                  }}
                  sx={tier.sxHead}
                />
                <CardContent bgcolor={thisTheme ? "black" : "white"}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "baseline",
                      mb: 2,
                    }}
                  >
                    <Typography
                      component="h2"
                      variant="h3"
                      color="text.primary"
                    >
                      ${tier.price}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                      /mo
                    </Typography>
                  </Box>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography
                        component="li"
                        variant="subtitle1"
                        align="center"
                        key={line}
                      >
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions sx={{ bgcolor: tier.bgcContent }}></CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Container
        maxWidth="md"
        component="footer"
        sx={{
          borderTop: (theme) => `1px solid ${theme.palette.divider}`,
          mt: 8,
          py: [3, 6],
        }}
      >
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </Box>
  );
};
export default Pricing;
