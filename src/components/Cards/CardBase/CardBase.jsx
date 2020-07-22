import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import PropTypes from 'prop-types';

const CardBase = ({ Content, className }) => {
  return (
    <Card>
      <CardContent className={className}>{Content}</CardContent>
    </Card>
  );
};

CardBase.propTypes = {
  Content: PropTypes.node,
  className: PropTypes.func
};

export default CardBase;
