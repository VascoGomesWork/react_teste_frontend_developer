import React from "react";
import { shallow } from "enzyme";
import UpdateFriend from "./UpdateFriend";

describe("UpdateFriend", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<UpdateFriend />);
    expect(wrapper).toMatchSnapshot();
  });
});
