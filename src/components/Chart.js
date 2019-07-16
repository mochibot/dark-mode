import React, { useState, useEffect } from "react";

import moment from "moment";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip
} from "recharts";

const Chart = (props) => {
  const formattedData = props.sparklineData
    .map((price, idx) => {
      if (idx % 6 === 0) {
        const timeToSubtract = 168 - idx;
        const date = moment()
          .subtract(timeToSubtract, "hours")
          .format("YYYY-MM-DD h:mma");
        return { value: price, date };
      } else if (idx === props.sparklineData.length - 1) {
        const date = moment().format("YYYY-MM-DD ddd h:mma");
        return { value: price, date };
      }
      return null;
    })
    .filter(data => data);

  

  return (
    <LineChart width={1100} height={300} data={formattedData} margin={{top: 20, right: 50}}>
      <Line type="monotone" dataKey="value" stroke={props.darkMode ? '#f68819' : "#8884d8"} />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <XAxis dataKey="date" interval={3} stroke={props.darkMode ? 'papayawhip' : '#303030'}/>
      <YAxis stroke={props.darkMode ? 'papayawhip' : '#303030'} label={{ value: 'Conversion rate (to USD)', angle: -90, position: 'insideLeft'}}/>
      <Tooltip labelStyle={{ color: "rgb(46, 46, 46)" }}/>
    </LineChart>
  );
};

export default Chart;
