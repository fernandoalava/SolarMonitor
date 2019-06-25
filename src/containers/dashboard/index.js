import React, { useEffect, useState, useCallback } from "react";
import { StyledContainer, StyledSection } from "./dashboard.styles";
import { fetchCloudData, fetchSolarData } from "../../helpers/api";
import { apiRefreshRate } from "../../config";

import { withSnackbar } from "notistack";

const DashBoardScreen = props => {
  const [cloudCoverage, setCloudCoverage] = useState(null);
  const [solarActivity, setSolarActivity] = useState(null);
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
      apiRefreshRate
    );
    let solarActivityInterval = setInterval(
      () => fetchSolarData(setSolarActivity, errorHandler),
      apiRefreshRate
    );
    return () => {
      clearInterval(cloudCoverageInterval);
      clearInterval(solarActivityInterval);
    };
  }, [solarActivity, cloudCoverage, errorHandler]);
  return (
    <StyledSection>
      <StyledContainer maxWidth="lg">Gato</StyledContainer>
    </StyledSection>
  );
};

export default withSnackbar(DashBoardScreen);
