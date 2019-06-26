import React from "react";
import PropTypes from "prop-types";

import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { StyledCard } from "./SolarPanelsTable.styles";
import CardContent from "@material-ui/core/CardContent";

export const SolarPanelsTable = props => {
  const { data } = props;
  return data.map(row => (
    <Grid key={row.id} item>
      <StyledCard>
        <CardContent>
          <Typography variant="h6" component="h3">
            {row.id}
          </Typography>
          <Typography color="textSecondary">
            Voltage: {row.voltage.toFixed(2)}
          </Typography>
          <Typography color="textSecondary">
            Wattage: {row.wattage.toFixed(2)}
          </Typography>
        </CardContent>
      </StyledCard>
    </Grid>
  ));
};

SolarPanelsTable.propTypes = {
  data: PropTypes.array.isRequired
};

SolarPanelsTable.defaultProps = {
  data: []
};

export default SolarPanelsTable;
