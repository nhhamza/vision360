import React from 'react';
import { mount } from 'enzyme';
import Home from './Home';

describe('Home component test', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<Home />);
  });

  it('should render', () => {
    expect(wrapper.exists()).toBeTruthy();
  });
});
