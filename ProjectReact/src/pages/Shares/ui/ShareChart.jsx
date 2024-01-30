import * as React from "react";
import { Typography } from "@mui/material";
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import Title from "../../../dashboard/Title";

const ShareChart = ({ thisShare, setTag, setPrice }) => {
  const [analysis, setAnalysis] = React.useState("");
  React.useEffect(() => {
    let change2 = 1 + Math.floor(Math.random() * 10);
    let change = 5 + Math.floor(Math.random() * 10);
    console.log(change2);
    console.log(change);
    if (change2 >= 6) {
      setAnalysis(+thisShare.price[1] + change);
      setTag(
        <Typography
          variant="sutitle2"
          sx={{ fontWeight: "bold", color: "green" }}
        >
          Strong-Buy
        </Typography>
      );
      setPrice(
        <Typography
          variant="sutitle2"
          sx={{ fontWeight: "bold", color: "green" }}
        >
          ${+thisShare.price[1] + change}
        </Typography>
      );
    } else {
      setAnalysis(+thisShare.price[1] - change);
      setTag(
        <Typography variant="sutitle" sx={{ fontWeight: "bold", color: "red" }}>
          Strong-Sell
        </Typography>
      );
      setPrice(
        <Typography
          variant="sutitle2"
          sx={{ fontWeight: "bold", color: "red" }}
        >
          ${+thisShare.price[1] - change}
        </Typography>
      );
    }
  }, [thisShare]);

  const data = [
    {
      name: "Share-Open",
      uv: thisShare.price[0],
      pv: thisShare.price[0],
      amt: thisShare.price[0],
    },
    {
      name: "Shares-Value",
      uv: thisShare.price[1],
      pv: thisShare.price[1],
      amt: thisShare.price[1],
    },
    {
      name: "Analysis-Value ",
      uv: +analysis,
      pv: +analysis,
      amt: +analysis,
    },
  ];
  return (
    <React.Fragment>
      <Title>
        {" "}
        <span style={{ color: "black" }}>Today</span>
      </Title>
      <ResponsiveContainer width="100%" aspect={undefined} height="100%">
        <ComposedChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" scale="band" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="uv" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="uv" stroke="#ff7300" />
        </ComposedChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
};
export default ShareChart;
