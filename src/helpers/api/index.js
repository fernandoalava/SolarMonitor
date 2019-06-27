import config from "../../config";
import axios from "axios";

export const cloudAPIUrl = `${config.protocol}://${
  config.planetOSDomain
}/v1/datasets/bom_access-g_global_40km/point?origin=dataset-details&apikey=${
  config.apiKey
}&count=50&lat=49.6&lon=-50.5&var=av_ttl_cld`;

export const solarAPIUrl = `${config.protocol}://${
  config.planetOSDomain
}/v1/datasets/bom_access-g_global_40km/point?origin=dataset-details&apikey=${
  config.apiKey
}&count=50&lat=49.6&lon=-50.5&var=av_swsfcdown`;

export const fetchCloudData = async (dataHandler, errorHanlder) => {
  try {
    let response = await axios.get(cloudAPIUrl);
    dataHandler(response.data.entries);
  } catch (err) {
    errorHanlder(err);
  }
};

export const fetchSolarData = async (dataHandler, errorHanlder) => {
  try {
    let response = await axios.get(solarAPIUrl);
    dataHandler(response.data.entries);
  } catch (err) {
    errorHanlder(err);
  }
};
