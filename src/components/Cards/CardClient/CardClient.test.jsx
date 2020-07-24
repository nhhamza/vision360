import React from 'react';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import Collapse from '@material-ui/core/Collapse';
import CardClient from './CardClient';

describe('CardClient test component', () => {
  const wrapper = mount(<CardClient />);

  it('should render', () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  it('should show collapse info on click', () => {
    act(() => {
      wrapper
        .find('#footer')
        .first()
        .simulate('click');
    });

    wrapper.update();

    expect(wrapper.find(Collapse).exists()).toBeTruthy();
  });

  it('should call onCollapseChanged on click', () => {
    const MOCK_PROPS = {
      onCollapseChanged: jest.fn()
    };

    const wrapperChanged = mount(<CardClient {...MOCK_PROPS} />);
    act(() => {
      wrapperChanged
        .find('#footer')
        .first()
        .simulate('click');
    });

    wrapperChanged.update();

    expect(MOCK_PROPS.onCollapseChanged).toHaveBeenCalledWith(false);
  });
});
