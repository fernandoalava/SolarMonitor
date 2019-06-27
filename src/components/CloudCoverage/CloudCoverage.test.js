import { shallow } from "enzyme";
import * as React from "react";
import CloudCoverage from ".";
import { cloudCoverageDataset } from "../../helpers/index";

jest.mock("moment", () => () => ({
  format: () => "2018–01–30T12:34:56+00:00",
  add: () => "2018–01–30T12:34:56+00:00",
  isBetween: () => "2018–01–30T12:34:56+00:00"
}));

describe("CloudCoverage", () => {
  it("Renders correctly without data", () => {
    const wrapper = shallow(<CloudCoverage activity={[]} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("Renders correctly with data", () => {
    const wrapper = shallow(
      <CloudCoverage activity={cloudCoverageDataset.entries} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
