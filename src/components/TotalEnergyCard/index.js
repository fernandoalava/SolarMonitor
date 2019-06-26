import React from "react";
import PropTypes from "prop-types";

import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import { StyledCard } from "./TotalEnergyCard.styles";

export const TotalEnergyCard = props => {
  const totalEnergy = props.data.reduce(
    (accumulator, item) => accumulator + Number(item.wattage),
    0
  );
  return (
    <StyledCard>
      <CardContent>
        <Typography variant="h5" component="h2">
          Total Energy
        </Typography>
        <Typography variant="h3" gutterBottom>
          {(totalEnergy / 100).toFixed(2)} kW
        </Typography>
      </CardContent>
    </StyledCard>
  );
};

TotalEnergyCard.propTypes = {
  data: PropTypes.array.isRequired
};

TotalEnergyCard.defaultProps = {
  data: []
};

export default TotalEnergyCard;
