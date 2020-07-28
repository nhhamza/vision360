import React from 'react';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import CardClient from '../../components/Cards/CardClient/CardClient';
import ResultItem from './ResultItem';
import CLIENT_MOCK from '../../shared/fixtures/clientBuilded.json';

describe('ResultItem test component', () => {
  const MOCK_PROPS = {
    item: {
      client: CLIENT_MOCK
    }
  };
  const wrapper = mount(<ResultItem {...MOCK_PROPS} />);

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
