import { shallow } from "enzyme";
import * as React from "react";
import CloudCoverage from ".";
import moment from "moment";
import { cloudCoverageDataset } from "../../helpers/index";

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
