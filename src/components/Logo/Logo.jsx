import React from 'react';
import logo from '../../assets/images/icon-court.png';
import './style.scss';
import text from '../../constants/translates';

const Logo = () => {
  return (
    <div className="logo__container">
      <img src={logo} alt="logo" className="logo__icon" />
      <span className="logo-title__left">{text.logo.vision}</span>
      <span className="logo-title__right">{text.logo.v360}</span>
    </div>
  );
};

export default Logo;
