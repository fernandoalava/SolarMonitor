import { shallow } from "enzyme";
import * as React from "react";
import { DashBoardScreen } from ".";
import { mockPanelsData } from "../../helpers";

jest.mock("../../helpers");
const { getPanelsInfo } = require("../../helpers");
getPanelsInfo.mockImplementation(() => mockPanelsData);

jest.useFakeTimers();

describe("Dashboard", () => {
  it("Renders correctly", () => {
    const wrapper = shallow(<DashBoardScreen />);
    expect(wrapper).toMatchSnapshot();
  });
});
