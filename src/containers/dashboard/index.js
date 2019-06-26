import React, { useEffect, useState, useCallback } from "react";
import { StyledSection } from "./dashboard.styles";
import { fetchCloudData, fetchSolarData } from "../../helpers/api";
import { getPanelsInfo } from "../../helpers";
import { useInterval } from "../../helpers/customHooks";
import config, { solarInformationRate } from "../../config";
import SolarActivity from "../../components/SolarActivity";
import CloudCoverage from "../../components/CloudCoverage";
import SolarPanelsTable from "../../components/SolarPanelsTable";
import TotalEnergyCard from "../../components/TotalEnergyCard";
import Grid from "@material-ui/core/Grid";

import { withSnackbar } from "notistack";

const DashBoardScreen = props => {
  const [cloudCoverage, setCloudCoverage] = useState([]);
  const [solarActivity, setSolarActivity] = useState([]);
  const [panelsInfo, setPanelsInfo] = useState([]);
  const { enqueueSnackbar } = props;

  const errorHandler = useCallback(
    err => {
      enqueueSnackbar("Oops! We have problems with our API Providers", {
        variant: "error"
      });
    },
    [enqueueSnackbar]
  );

  useInterval(() => {
    fetchCloudData(setCloudCoverage, errorHandler);
  }, config.apiRefreshRate);

  useInterval(() => {
    fetchSolarData(setSolarActivity, errorHandler);
  }, config.apiRefreshRate);

  useInterval(() => {
    setPanelsInfo(getPanelsInfo());
  }, solarInformationRate);

  useEffect(() => {
    fetchCloudData(setCloudCoverage, errorHandler);
    fetchSolarData(setSolarActivity, errorHandler);
    setPanelsInfo(getPanelsInfo());
  }, [errorHandler, setCloudCoverage, setSolarActivity]);
  return (
    <StyledSection>
      <Grid container styles={{ flexGrow: 1 }} spacing={2}>
        <Grid item xs={12}>
          <Grid container justify="flex-start" spacing={2}>
            <Grid key="total-energy" item>
              <TotalEnergyCard data={panelsInfo} />
            </Grid>
            <Grid key="solar-activity" item>
              <SolarActivity activity={solarActivity} />
            </Grid>
            <Grid key="cloud-coverage" item>
              <CloudCoverage activity={cloudCoverage} />
            </Grid>
          </Grid>
          <Grid container justify="flex-start" spacing={2}>
            <SolarPanelsTable data={panelsInfo} />
          </Grid>
        </Grid>
      </Grid>
    </StyledSection>
  );
};

export default withSnackbar(DashBoardScreen);
