import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import CardWithHeader from '../CardWithHeader/CardWithHeader';
import Timeline from '../../Timeline/Timeline';
import text from '../../../constants/translates';
import { CARD_TYPE, SOLUTION_STATE } from '../../../constants/global-constants';
import './style.scss';
import styles from './style';

const CardAchat = ({ solution, collapsed }) => {
  const classes = makeStyles(styles)();
  const getMd = () => {
    return collapsed ? 12 : 6;
  };
  const getSeparatorClassName = () => {
    return collapsed
      ? classes.separatorCollapsed
      : classes.separatorNoCollapsed;
  };

  const getTimelineTextClassName = () => {
    return collapsed ? classes.timelineTextCollapsed : classes.timelineText;
  };

  const getTimelineClassName = () => {
    return collapsed ? classes.timelineCollapsed : classes.timeline;
  };

  const content = (
    <Grid container className={classes.achatContainer}>
      <Grid item xs={12}>
        <p className="achat-card__title">
          {text.formatString(text.solution.title, {
            contractNumber: solution.contractNumber,
            bookingDate: solution.bookingDate
          })}
        </p>
      </Grid>
      <Grid item xs={12} className={getTimelineClassName()}>
        <Timeline
          steps={SOLUTION_STATE}
          activeStep={SOLUTION_STATE.findIndex(
            stat => stat.key === solution.contractStatusCode
          )}
        />
      </Grid>
      <Grid item xs={12} className={getTimelineTextClassName()}>
        <p className="timeline-card__text">
          {
            SOLUTION_STATE.find(sta => sta.key === solution.contractStatusCode)
              ?.name
          }
        </p>
      </Grid>
      <Grid item xs={12} md={getMd()}>
        <Grid container>
          <Grid item xs={12}>
            <p className="achat-card__text">
              {`${text.achat.program}: ${solution.programCode} - ${solution.programName}`}
            </p>
          </Grid>
          <Grid item xs={12}>
            <p className="achat-card__text">
              {`${text.achat.deliveryDate}: ${solution.deliveryDate}`}
            </p>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} className={getSeparatorClassName()}>
        <div className="separator"></div>
      </Grid>
      <Grid item xs={12} md={getMd()}>
        <Grid container>
          <Grid item xs={12}>
            <p className="achat-card__text">
              {`${text.achat.filial}: ${solution.subsidiary}`}
            </p>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
  return <CardWithHeader cardType={CARD_TYPE.finance} content={content} />;
};

CardAchat.propTypes = {
  solution: PropTypes.oneOf(PropTypes.object),
  collapsed: PropTypes.bool
};

export default CardAchat;
