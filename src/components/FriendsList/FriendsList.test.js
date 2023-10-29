import React from "react";
import { shallow } from "enzyme";
import FriendsList from "./FriendsList";

describe("FriendsList", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<FriendsList />);
    expect(wrapper).toMatchSnapshot();
  });
});
