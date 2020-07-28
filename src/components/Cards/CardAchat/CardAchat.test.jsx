import React from 'react';
import { mount } from 'enzyme';
import CardAchat from './CardAchat';

describe('CardAchat component test', () => {
  const MOCK_PROPS = {
    achat: {}
  };
  const wrapper = mount(<CardAchat {...MOCK_PROPS} />);

  it('should render', () => {
    expect(wrapper.exists()).toBeTruthy();
  });
});
