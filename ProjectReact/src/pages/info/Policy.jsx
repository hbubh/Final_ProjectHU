import { Box, Typography } from "@mui/material";
const Policy = () => {
  return (
    <Box
      sx={{
        padding: "10%",
        paddingTop: "10%",
        textAlign: "center",
      }}
    >
      <Typography variant="h4" sx={{ width: "100%" }}></Typography>
      <Typography variant="h2" sx={{ width: "100%" }}>
        Usage Policy - Demo
      </Typography>
      <br />
      <br />
      <br />
      <Typography variant="h4" sx={{ width: "100%" }}>
        1.General
      </Typography>
      <Typography variant="subtitle1" sx={{ width: "100%" }}>
        1.1. This website is a demo site and does not engage in real trading.
      </Typography>
      <Typography variant="subtitle1" sx={{ width: "100%" }}>
        1.2. All information and tools presented on the site are for
        demonstration and educational purposes only and are not intended for
        real transactions.
      </Typography>
      <br />
      <br />
      <br />
      <Typography variant="h4" sx={{ width: "100%" }}>
        2. Users
      </Typography>
      <Typography variant="subtitle1" sx={{ width: "100%" }}>
        2.1. Every user on the site can create a free account and use the
        available tools and content.
      </Typography>
      <Typography variant="subtitle1" sx={{ width: "100%" }}>
        2.2. You have the option to choose between different plans that suit
        your user type (Regular, Pro, Business).
      </Typography>
      <br />
      <br />
      <br />
      <Typography variant="h4" sx={{ width: "100%" }}>
        3. Stock Trading
      </Typography>
      <Typography variant="subtitle1" sx={{ width: "100%" }}>
        3.1. All stock trading actions on this site are demo actions and do not
        involve real money.
      </Typography>
      <Typography variant="subtitle1" sx={{ width: "100%" }}>
        3.2. Financial information and data related to stocks are for demo
        purposes and do not reflect financial reality.
      </Typography>
      <br />
      <br />
      <br />
      <Typography variant="h4" sx={{ width: "100%" }}>
        4. Responsibility and Other Uses
      </Typography>
      <Typography variant="subtitle1" sx={{ width: "100%" }}>
        4.1. The user commits to using the information and tools presented on
        the site for demonstration purposes only and cannot rely on them to make
        real decisions in the financial market.
      </Typography>
      <Typography variant="subtitle1" sx={{ width: "100%" }}>
        4.2. You do not have a real-world perspective, and therefore the user is
        responsible for fact-checking and making independent decisions.
      </Typography>
      <Typography variant="subtitle1" sx={{ width: "100%" }}>
        4.3. The site is not responsible for any direct or indirect damage or
        loss resulting from the use of the site or its content.
      </Typography>
      <br />
      <br />
      <br />
      <Typography variant="h4" sx={{ width: "100%" }}>
        5. Copyrights
      </Typography>
      <Typography variant="subtitle1" sx={{ width: "100%" }}>
        5.1. All content displayed on this site is subject to copyright and
        cannot be used for other purposes without written permission from the
        creators.
      </Typography>
      <Typography variant="subtitle1" sx={{ width: "100%" }}>
        5.2. Copying, broadcasting, or using content for exclusive commercial
        purposes is strictly prohibited.`;
      </Typography>
    </Box>
  );
};
export default Policy;
