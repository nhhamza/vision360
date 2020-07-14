import React from 'react';
import { mount } from 'enzyme';
import CardBase from './CardBase';

describe('CardBase Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<CardBase />);
  });

  it('should render', () => {
    expect(wrapper.exists()).toBeTruthy();
  });
});
