import { shallow } from "enzyme";
import * as React from "react";
import TotalEnergyCard from ".";
import { mockPanelsData } from "../../helpers";

describe("TotalEnergyCard", () => {
  it("Renders correctly without data", () => {
    const wrapper = shallow(<TotalEnergyCard data={[]} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("Renders correctly with data", () => {
    const wrapper = shallow(<TotalEnergyCard data={mockPanelsData} />);
    expect(wrapper).toMatchSnapshot();
  });
});
