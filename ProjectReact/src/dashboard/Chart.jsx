import * as React from "react";
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
import Title from "./Title";
import axios from "axios";

const Chart = ({ thisUser }) => {
  const [myShares, setShares] = React.useState();
  const [mySharesCosts, setSharesCosts] = React.useState(0);
  const [thisPrices1, setPrices1] = React.useState(0);
  const [thisPrices2, setPrices2] = React.useState(0);
  React.useEffect(() => {
    if (!myShares) {
      setShares(thisUser.myShares);
    }
    if (myShares && thisPrices1 === 0 && thisPrices2 === 0) {
      for (let i of myShares) {
        axios
          .get(`/shares/${i.shareId}`)
          .then(({ data }) => {
            const share = data.share;
            setPrices1((num) => (num += +share.price[0] * +i.pcs));
            setPrices2((num) => (num += +share.price[1] * +i.pcs));
          })
          .catch((err) => {
            console.log("err", err);
          });
      }
    }
  }, [myShares, thisUser.name]);

  React.useEffect(() => {
    if (!myShares) {
      setShares(thisUser.myShares);
    }
    if (myShares && mySharesCosts === 0) {
      for (let i of myShares) {
        setSharesCosts((myNum) => (myNum += i.costs));
      }
    }
  }, [myShares]);

  const data = [
    {
      name: "Shares Costs",
      uv: mySharesCosts,
      pv: mySharesCosts,
      amt: mySharesCosts,
    },
    {
      name: "Shares Value Opening",
      uv: +thisPrices1,
      pv: +thisPrices1,
      amt: +thisPrices1,
    },
    {
      name: "Shares Value Now",
      uv: +thisPrices2,
      pv: +thisPrices2,
      amt: +thisPrices2,
    },
  ];
  return (
    <React.Fragment>
      <Title>
        {" "}
        <span style={{ color: "black" }}>Today Share's Value</span>
      </Title>
      <ResponsiveContainer width="100%" height="100%">
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
export default Chart;
