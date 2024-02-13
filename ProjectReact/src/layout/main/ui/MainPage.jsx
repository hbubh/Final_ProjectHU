import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";
import GaleryMain from "./GaleryForMain";
import IconsMain from "./IconsForMain";
import SharesMain from "./SharesForMain";
import ImageMain from "./ImageForMain";
import NewsMain from "./NewForMain";
import { useSelector } from "react-redux";
import ChartMain from "./ChartForMain";
import ProSecMain from "./ProSectionForMain";
import Pricing from "./Pricing";
import BuzzSecMain from "./BuzzSectionForMain";

const MainTitle = () => {
  const [conOP, setConOP] = React.useState("0");
  const thisTheme = useSelector((bigPie) => bigPie.themeSlice.darkTheme);
  useEffect(() => {
    setTimeout(() => {
      setConOP(1);
    }, 2000);
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        height: "150vh",
        bgcolor: "black",
        boxShadow: "0px 7px 30px",
      }}
    >
      <Box sx={{ width: "100%", height: "5%" }} />
      <ImageMain conOP={conOP} />
      <IconsMain conOP={conOP} />
      <SharesMain />
      <NewsMain />
      <Box
        sx={{
          bgcolor: "black",
          width: { md: "100%", lg: "80%" },
          height: "150%",
          position: "absolute",
          mt: "110%",
          overflow: "hidden",
        }}
      />
      <Box
        sx={{
          bgcolor: "black",
          width: "100%",
          height: { md: "160%", lg: "160%" },
          position: "absolute",
          mt: { md: "210%", lg: "158%" },
        }}
      />
      <Box
        sx={{
          bgcolor: "grey",
          width: "100%",
          height: { md: "150%", lg: "300%" },
          position: "absolute",
          mt: { md: "345%", lg: "230%" },
        }}
      />
      <ProSecMain />
      <BuzzSecMain />
      <ChartMain />
      <Box
        bgcolor={thisTheme ? "black" : "white"}
        sx={{
          position: "absolute",
          marginTop: { md: "500%", lg: "300%" },
          height: { md: "50%", lg: "auto" },
          width: "90%",
          ml: "5%",
          borderRadius: "20px",
          padding: "5px",
        }}
      >
        <Pricing />
      </Box>
      <Box
        sx={{
          width: { md: "120%", lg: "100%" },
          position: "sticky",
          height: { xs: "auto", lg: "180%" },
          ml: "-20%",
          transition: "all 1s",
          transform: "skew(00deg, 30deg)",
          overflow: "hidden",
          opacity: conOP,
          bgcolor: "white",
          color: "black",
          borderTop: "10px solid beige",
          borderBottom: "40px solid beige",
          boxShadow: "0px 7px 15px",
        }}
      >
        <Box sx={{ width: "100%", height: { md: "10%", lg: "20%" } }} />
        <Box
          sx={{
            width: "25%",
            mt: { md: "10%", lg: "-15%" },
            ml: "29%",
            height: "auto",
            transform: "skew(00deg, -30deg)",
          }}
        >
          <img
            style={{ width: "100%", height: "auto" }}
            src="https://img.freepik.com/premium-photo/success-financial-gold-color-growth-arrow-3d-render-illustration_585146-47.jpg?w=740"
            alt="background"
          />
        </Box>
        <Box sx={{ width: "75%", mt: "-13%" }}>
          <Typography
            variant="h2"
            sx={{
              transform: "skew(00deg, -30deg)",
              ml: "35%",
              color: "grey",
              fontWeight: "600",
            }}
          >
            INVESTIONS HOUSE{" "}
          </Typography>
          <Box
            sx={{
              transform: "skew(00deg, -30deg)",
              width: "100%",
              height: "3%",
            }}
          >
            .
          </Box>
          <Typography
            variant="h4"
            sx={{
              transform: "skew(00deg, -30deg)",
              width: "70%",
              ml: "35%",
              color: "grey",
              fontWeight: "400",
            }}
          >
            The home of investors and investees
          </Typography>
          <Box
            sx={{
              transform: "skew(00deg, -30deg)",
              width: "100%",
              height: "15%",
            }}
          >
            .
          </Box>
          <Typography
            variant="body1"
            sx={{
              transform: "skew(00deg, -30deg)",
              ml: "35%",
              color: "grey",
              fontWeight: "400",
            }}
          >
            The leading investment site, come and discover with us the tools and
            knowledge you need to maximize your profits
          </Typography>
          <GaleryMain />
        </Box>
      </Box>
    </Box>
  );
};
export default MainTitle;
