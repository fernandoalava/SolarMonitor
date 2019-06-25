import config from "../../config";
import axios from "axios";

export const fetchCloudData = (dataHandler, errorHandler) => {
  axios
    .get(
      `${config.protocol}://${
        config.planetOSDomain
      }/v1/datasets/bom_access-g_global_40km/point?origin=dataset-details&apikey=${
        config.apiKey
      }&count=50&lat=49.6&lon=-50.5&var=av_ttl_cld`
    )
    .then(response => {
      dataHandler(response.data.entries);
    })
    .catch(err => {
      errorHandler(err);
    });
};

export const fetchSolarData = (dataHandler, errorHandler) => {
  axios
    .get(
      `${config.protocol}://${
        config.planetOSDomain
      }/v1/datasets/bom_access-g_global_40km/point?origin=dataset-details&apikey=${
        config.apiKey
      }&count=50&lat=49.6&lon=-50.5&var=av_swsfcdown`
    )
    .then(response => {
      dataHandler(response.data.entries);
    })
    .catch(err => {
      errorHandler(err);
    });
};
