import React, { PureComponent } from "react";
import { Box, Typography } from "@mui/material";
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Page A",
    Forecast: 590,
    value: 800,
    AVG: 1400,
  },
  {
    name: "Page B",
    Forecast: 868,
    value: 967,
    AVG: 1506,
  },
  {
    name: "Page C",
    Forecast: 1397,
    value: 1098,
    AVG: 989,
  },
  {
    name: "Page D",
    Forecast: 1480,
    value: 1200,
    AVG: 1228,
  },
  {
    name: "Page E",
    Forecast: 1520,
    value: 1108,
    AVG: 1100,
  },
  {
    name: "Page F",
    Forecast: 1400,
    value: 680,
    AVG: 1700,
  },
];

export default class Example extends PureComponent {
  static demoUrl =
    "https://codesandbox.io/s/composed-chart-with-axis-label-55s1s";

  render() {
    return (
      <Box
        sx={{
          width: "50%",
          height: { md: "20%", lg: "50%" },
          marginTop: { md: "190%", lg: "130%" },
          position: "absolute",
        }}
      >
        <Box
          sx={{
            width: "20%",
            color: "white",
            ml: "5%",
            mt: "-20%",
            position: "absolute",
          }}
        >
          <Typography variant="h3">Our Tools</Typography>
        </Box>

        <ResponsiveContainer
          width="110%"
          height="120%"
          style={{ marginLeft: "5%" }}
        >
          <ComposedChart
            width={500}
            height={400}
            data={data}
            margin={{
              top: 20,
              right: 80,
              bottom: 20,
              left: 20,
            }}
          >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis
              dataKey="name"
              label={{
                value: "Pages",
                position: "insideBottomRight",
                offset: 0,
              }}
              scale="band"
            />
            <YAxis
              label={{ value: "Index", angle: -90, position: "insideLeft" }}
            />
            <Tooltip />
            <Legend />
            <Area
              type="monotone"
              dataKey="AVG"
              fill="#8884d8"
              stroke="#8884d8"
            />
            <Bar dataKey="value" barSize={20} fill="#413ea0" />
            <Line type="monotone" dataKey="Forecast" stroke="#ff7300" />
          </ComposedChart>
        </ResponsiveContainer>
        <Box
          sx={{
            width: "20%",
            color: "white",
            ml: "115%",
            mt: "-20%",
            position: "absolute",
          }}
        >
          <Typography variant="h3">Your Experience</Typography>
        </Box>
      </Box>
    );
  }
}
