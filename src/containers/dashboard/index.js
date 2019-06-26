import React, { useEffect, useState, useCallback } from "react";
import { StyledContainer, StyledSection } from "./dashboard.styles";
import { fetchCloudData, fetchSolarData } from "../../helpers/api";
import config from "../../config";
import SolarActivity from "../../components/SolarActivity";
import CloudCoverage from "../../components/CloudCoverage";

import { withSnackbar } from "notistack";

const DashBoardScreen = props => {
  const [cloudCoverage, setCloudCoverage] = useState([]);
  const [solarActivity, setSolarActivity] = useState([]);
  const { enqueueSnackbar } = props;

  const errorHandler = useCallback(
    err => {
      console.log(err);
      enqueueSnackbar("Oops! We have problems with our API Providers", {
        variant: "error"
      });
    },
    [enqueueSnackbar]
  );

  useEffect(() => {
    let cloudCoverageInterval = setInterval(
      () => fetchCloudData(setCloudCoverage, errorHandler),
      config.apiRefreshRate
    );
    let solarActivityInterval = setInterval(
      () => fetchSolarData(setSolarActivity, errorHandler),
      config.apiRefreshRate
    );
    return () => {
      clearInterval(cloudCoverageInterval);
      clearInterval(solarActivityInterval);
    };
  }, [solarActivity, cloudCoverage, errorHandler]);
  return (
    <StyledSection>
      <StyledContainer maxWidth="lg">
        <SolarActivity activity={solarActivity} />
        <CloudCoverage activity={cloudCoverage} />
      </StyledContainer>
    </StyledSection>
  );
};

export default withSnackbar(DashBoardScreen);
