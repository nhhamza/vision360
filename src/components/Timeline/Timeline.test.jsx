import React from 'react';
import { mount } from 'enzyme';
import Timeline from './Timeline';

describe('timeline component test', () => {
  const wrapper = mount(<Timeline />);

  it('should render', () => {
    expect(wrapper.exists()).toBeTruthy();
  });
});
