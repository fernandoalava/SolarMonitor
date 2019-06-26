import { shallow, mount } from "enzyme";
import * as React from "react";
import { DashBoardScreen } from ".";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import config from "../../config";
import { cloudCoverageDataset, solarActivityDataset } from "../../helpers";
import { act } from "react-dom/test-utils";

describe("Dashboard", () => {
  it("Renders correctly", () => {
    shallow(<DashBoardScreen />);
  });
  /*
  it("Should render a proper widgets", done => {
    act(() => {
      const mock = new MockAdapter(axios);
      mock
        .onGet(
          `${config.protocol}://${
            config.planetOSDomain
          }/v1/datasets/bom_access-g_global_40km/point?origin=dataset-details&apikey=${
            config.apiKey
          }&count=50&lat=49.6&lon=-50.5&var=av_ttl_cld`
        )
        .reply(200, { data: cloudCoverageDataset });
      mock
        .onGet(
          `${config.protocol}://${
            config.planetOSDomain
          }/v1/datasets/bom_access-g_global_40km/point?origin=dataset-details&apikey=${
            config.apiKey
          }&count=50&lat=49.6&lon=-50.5&var=av_swsfcdown`
        )
        .reply(200, { data: solarActivityDataset });
      const component = mount(<DashBoardScreen />);
    });
    setImmediate(() => {
        component.update();
        done();
      });
  });*/
});
