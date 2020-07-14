import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import PropTypes from 'prop-types';

const CardBase = ({ Content }) => {
  return (
    <Card>
      <CardContent>{Content}</CardContent>
    </Card>
  );
};

CardBase.propTypes = {
  Content: PropTypes.node
};

export default CardBase;
