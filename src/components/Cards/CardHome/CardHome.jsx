import React from 'react';
import CardBase from '../CardBase/CardBase';
import text from '../../../constants/translates';

const CardHome = () => {
  const children = (
    <div>
      <p>{text.home.intro}</p>
    </div>
  );

  return <CardBase Content={children} />;
};

export default CardHome;
