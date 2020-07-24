import React from 'react';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import CardClient from '../../components/Cards/CardClient/CardClient';
import ResultItem from './ResultItem';

describe('ResultItem test component', () => {
  const wrapper = mount(<ResultItem />);

  it('should render', () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  it('should change width if collapse changed', () => {
    act(() => {
      wrapper
        .find(CardClient)
        .first()
        .props()
        .onCollapseChanged(false);
    });

    wrapper.update();

    expect(
      wrapper
        .find('#clienGrid')
        .first()
        .props().md
    ).toEqual(8);
  });
});
