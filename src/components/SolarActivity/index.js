import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import CircularProgress from "@material-ui/core/CircularProgress";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

export const SolarActivity = props => {
  const { activity } = props;
  const now = moment();
  const next24hours = moment().add(24, "hours");

  const data = props.activity
    .filter(item => moment(item.axes.time).isBetween(now, next24hours))
    .map(item => ({
      time: moment(item.axes.time).format("HH:mm"),
      watts: Math.floor(item.data.av_swsfcdown)
    }));

  return activity.length >= 1 ? (
    <LineChart
      width={500}
      height={150}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="time" />
      <YAxis dataKey="watts" />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="watts"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
        name="Watts m-2"
      />
    </LineChart>
  ) : (
    <CircularProgress />
  );
};

SolarActivity.propTypes = {
  activity: PropTypes.array.isRequired
};

SolarActivity.defaultProps = {
  activity: []
};

export default SolarActivity;
