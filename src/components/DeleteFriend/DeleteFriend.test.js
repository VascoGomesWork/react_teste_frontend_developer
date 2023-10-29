import React from "react";
import { shallow } from "enzyme";
import DeleteFriend from "./DeleteFriend";

describe("DeleteFriend", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<DeleteFriend />);
    expect(wrapper).toMatchSnapshot();
  });
});
