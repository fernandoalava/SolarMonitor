import Chart from "react-google-charts";
import React from "react";
import PropTypes from "prop-types";
import * as moment from "moment";
import CircularProgress from "@material-ui/core/CircularProgress";

export const SolarActivity = props => {
  const { activity } = props;
  const now = moment();
  const next24hours = moment().add(24, "hours");
  let data = [["Time", "kW"]];

  props.activity
    .filter(item => moment(item.axes.time).isBetween(now, next24hours))
    .map(item =>
      data.push([
        moment(item.axes.time).format("HH:mm"),
        Math.floor(item.data.av_swsfcdown)
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
          title: "Visible Diffuse Downward Solar Flux"
        },
        vAxis: {
          title: "kW"
        }
      }}
      rootProps={{ "data-testid": "1" }}
    />
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
