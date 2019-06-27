import { shallow } from "enzyme";
import * as React from "react";
import SolarActivity from ".";
import { solarActivityDataset } from "../../helpers/index";

jest.mock("moment", () => () => ({
  format: () => "2018–01–30T12:34:56+00:00",
  add: () => "2018–01–30T12:34:56+00:00",
  isBetween: () => "2018–01–30T12:34:56+00:00"
}));

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
