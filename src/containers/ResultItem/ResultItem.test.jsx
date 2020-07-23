import React from 'react';
import { mount } from 'enzyme';
import ResultItem from './ResultItem';

describe('ResultItem test component', () => {
  const wrapper = mount(<ResultItem />);

  it('should render', () => {
    expect(wrapper.exists()).toBeTruthy();
  });
});
