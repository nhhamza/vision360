import React from 'react';
import { mount } from 'enzyme';
import CardHome from './CardHome';

describe('CardHome component test', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<CardHome />);
  });

  it('should render', () => {
    expect(wrapper.exists()).toBeTruthy();
  });
});
