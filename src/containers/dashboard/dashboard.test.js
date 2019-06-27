import { shallow } from "enzyme";
import * as React from "react";
import { DashBoardScreen } from ".";

describe("Dashboard", () => {
  it("Renders correctly", () => {
    const wrapper = shallow(<DashBoardScreen />);
    expect(wrapper).toMatchSnapshot();
  });
});
