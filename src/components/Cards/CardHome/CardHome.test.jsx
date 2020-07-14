import React from 'react';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import Button from '@material-ui/core/Button';
import Input from '../../Input/Input';
import CardHome from './CardHome';
import ROUTES_CONSTANTS from '../../../constants/route.constants';

describe('CardHome component test', () => {
  let wrapper;

  const history = createMemoryHistory();
  beforeEach(() => {
    wrapper = mount(
      <Router history={history}>
        <CardHome />
      </Router>
    );
  });

  it('should render', () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  it('should redirect on search click', () => {
    const spyHistory = jest.spyOn(history, 'push');
    const testSearch = 'test';
    act(() => {
      wrapper
        .find(Input)
        .first()
        .props()
        .onChange(testSearch);
    });

    wrapper.update();

    act(() => {
      wrapper
        .find(Button)
        .first()
        .simulate('click');
    });

    wrapper.update();

    expect(spyHistory).toHaveBeenCalledWith(
      `${ROUTES_CONSTANTS.researchBase}${testSearch}`
    );
  });
});
