import React from "react";
import PropTypes from "prop-types";
import * as moment from "moment";
import CircularProgress from "@material-ui/core/CircularProgress";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

export const CloudCoverage = props => {
  const { activity } = props;
  const now = moment();
  const next24hours = moment().add(24, "hours");

  const data = props.activity
    .filter(item => moment(item.axes.time).isBetween(now, next24hours))
    .map(item => ({
      time: moment(item.axes.time).format("HH:mm"),
      sky_clarity: Math.floor(item.data.av_ttl_cld * 100)
    }));

  return activity.length >= 1 ? (
    <AreaChart
      width={500}
      height={200}
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
      <YAxis dataKey="sky_clarity" />
      <Tooltip />
      <Legend />
      <Area
        type="monotone"
        dataKey="sky_clarity"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
        name="% Sky Clarity"
      />
    </AreaChart>
  ) : (
    <CircularProgress />
  );
};

CloudCoverage.propTypes = {
  activity: PropTypes.array.isRequired
};

CloudCoverage.defaultProps = {
  activity: []
};

export default CloudCoverage;
