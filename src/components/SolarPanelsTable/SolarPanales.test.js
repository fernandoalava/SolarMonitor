import { shallow } from "enzyme";
import * as React from "react";
import SolarPanelsTable from ".";
import { mockPanelsData } from "../../helpers";

describe("SolarPanelsTable", () => {
  it("Renders correctly without data", () => {
    const wrapper = shallow(<SolarPanelsTable data={[]} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("Renders correctly with data", () => {
    const wrapper = shallow(<SolarPanelsTable data={mockPanelsData} />);
    expect(wrapper).toMatchSnapshot();
  });
});
