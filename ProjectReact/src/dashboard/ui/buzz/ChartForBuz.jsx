import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import { BarChart } from "@mui/x-charts/BarChart";
import { Box, Typography } from "@mui/material";

export default function BasicPie({ dataFromServer }) {
  let arry = [];
  let data = [];
  let data1 = [];
  let data2 = [];
  let arryNames = [];
  let arryNums = [];
  let arryNumStart = [];
  let arryNums0 = [];
  let arryNums1 = [];
  let x = 0;

  for (let i of dataFromServer) {
    let shareObj = {
      id: i._id,
      value: i.price[1],
      label: i.title,
    };
    arry.push(shareObj);
    arryNames.push(`${x}:${i.title}`);
    arryNumStart.push(300);
    arryNums0.push(+i.price[0]);
    arryNums1.push(+i.price[1]);
    x++;
  }
  for (let i = 0; i <= arryNums0.length - 1; i++) {
    data.push(+arryNumStart[i]);
    data1.push(+arryNums0[i]);
    data2.push(+arryNums1[i]);
  }
  arryNums.push({ data: data }, { data: data1 }, { data: data2 });

  return (
    <React.Fragment>
      <Typography variant="h4" textAlign={"center"}>
        {" "}
        Analyze your stocks with the most advanced tools
      </Typography>
      <Box
        sx={{ width: "100%", mb: "8%", display: { xs: "block", lg: "flex" } }}
      >
        <Box sx={{ width: "100%" }}>
          <BarChart
            xAxis={[{ scaleType: "band", data: arryNames }]}
            series={arryNums}
            width={600}
            height={400}
          />
          <Typography
            variant="h6"
            textAlign={"center"}
            sx={{ fontWeight: "300" }}
          >
            {" "}
            See the price change history of your shares
          </Typography>
        </Box>
        <Box sx={{ width: "100%" }}>
          <PieChart
            series={[
              {
                data: arry.map((ta) => ta),
              },
            ]}
            width={600}
            height={400}
            sx={{
              padding: "3%",
            }}
          />
          <Typography
            variant="h6"
            textAlign={"center"}
            sx={{ fontWeight: "300" }}
          >
            {" "}
            Check how much each stock weighs in relation to the others
          </Typography>
        </Box>
      </Box>
    </React.Fragment>
  );
}
