import React from 'react';
import { mount } from 'enzyme';
import CardWithHeader from './CardWithHeader';
import { CARD_TYPE, BADGE_TYPE } from '../../../constants/global-constants';

describe('CardWithHeader component test', () => {
  let wrapper;

  const MOCK_PROPS = {
    cardType: CARD_TYPE.identity
  };

  beforeEach(() => {
    wrapper = mount(<CardWithHeader {...MOCK_PROPS} />);
  });

  it('should render', () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  it('does not show logo y cardType has not logo', () => {
    expect(wrapper.find('.logo').exists()).toBeFalsy();
  });

  it('does show logo y cardType has logo', () => {
    const MOCK_PROPS_LOGO = {
      cardType: { ...CARD_TYPE.newBuy, logo: 'testLogo' }
    };
    const wrapperLogo = mount(<CardWithHeader {...MOCK_PROPS_LOGO} />);

    expect(wrapperLogo.find('.logo').exists()).toBeTruthy();
  });

  it('does show badge if exist', () => {
    const MOCK_PROPS_BADGE = {
      badge: BADGE_TYPE.vip
    };
    const wrapperLogo = mount(<CardWithHeader {...MOCK_PROPS_BADGE} />);

    expect(wrapperLogo.find('.badge').exists()).toBeTruthy();
  });
});
