import React from "react";
import { shallow } from "enzyme";
import AddFriend from "./AddFriend";

describe("AddFriend", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<AddFriend />);
    expect(wrapper).toMatchSnapshot();
  });
});
