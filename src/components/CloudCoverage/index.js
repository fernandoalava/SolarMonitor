import Chart from "react-google-charts";
import React from "react";
import PropTypes from "prop-types";
import * as moment from "moment";
import CircularProgress from "@material-ui/core/CircularProgress";

export const CloudCoverage = props => {
  const { activity } = props;
  const now = moment();
  const next24hours = moment().add(24, "hours");
  let data = [["Time", "%"]];

  props.activity
    .filter(item => moment(item.axes.time).isBetween(now, next24hours))
    .map(item =>
      data.push([
        moment(item.axes.time).format("HH:mm"),
        Math.floor(item.data.av_ttl_cld * 100)
      ])
    );

  return activity.length >= 1 ? (
    <Chart
      width={"300px"}
      height={"150px"}
      chartType="LineChart"
      loader={<CircularProgress />}
      data={data}
      options={{
        hAxis: {
          title: "Sky Cloud Coverage"
        },
        vAxis: {
          title: "%"
        }
      }}
      rootProps={{ "data-testid": "1" }}
    />
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
