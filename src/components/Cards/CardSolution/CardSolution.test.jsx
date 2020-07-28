import React from 'react';
import { mount } from 'enzyme';
import CardSolution from './CardSolution';

describe('CardSolution component test', () => {
  const MOCK_PROPS = {
    solution: {}
  };
  const wrapper = mount(<CardSolution {...MOCK_PROPS} />);

  it('should render', () => {
    expect(wrapper.exists()).toBeTruthy();
  });
});
