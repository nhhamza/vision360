import React from 'react';
import { mount } from 'enzyme';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import CardHome from './CardHome';

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
});
