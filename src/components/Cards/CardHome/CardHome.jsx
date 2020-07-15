import React from 'react';
import CardBase from '../CardBase/CardBase';
import InputSearch from '../../InputSearch/InputSearch';
import text from '../../../constants/translates';
import './style.scss';

const CardHome = () => {
  const children = (
    <div>
      <p className="card__title">{text.home.intro}</p>
      <p className="card__subtitle">{text.home.wraning}</p>
      <InputSearch />
    </div>
  );

  return <CardBase Content={children} />;
};

export default CardHome;
