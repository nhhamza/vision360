import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import CardBase from '../CardBase/CardBase';
import styles from './style';
import './style.scss';

const CardWithHeader = ({ cardType, badge, content }) => {
  const classes = makeStyles(styles)();
  const badgeDisplay = () => {
    return (
      <div className="right-corner">
        <span
          className="badge"
          style={{ border: `1px solid ${badge?.color}`, color: badge?.color }}
        >
          <div>{badge?.name}</div>
        </span>
      </div>
    );
  };
  const children = (
    <>
      <div className="header-card">
        <span
          className="cartouche"
          style={{ backgroundColor: cardType?.color }}
        >
          {cardType?.logo && (
            <img className="logo" src={cardType?.logo} alt="logo" />
          )}
          <div>{cardType?.name}</div>
        </span>
        {badge && badgeDisplay()}
      </div>
      <div className="card-content">{content}</div>
    </>
  );

  return <CardBase Content={children} className={classes.cardContent} />;
};

CardWithHeader.propTypes = {
  cardType: PropTypes.objectOf(PropTypes.object()),
  badge: PropTypes.objectOf(PropTypes.object()),
  content: PropTypes.node
};

export default CardWithHeader;
