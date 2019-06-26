import { shallow } from "enzyme";
import * as React from "react";
import SolarActivity from ".";
import moment from "moment";
import { solarActivityDataset } from "../../helpers/index";

describe("SolarActivity", () => {
  it("Renders correctly without data", () => {
    const wrapper = shallow(<SolarActivity activity={[]} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("Renders correctly with data", () => {
    const wrapper = shallow(
      <SolarActivity activity={solarActivityDataset.entries} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
