import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
import { makeStyles } from '@material-ui/core/styles';
import CardWithHeader from '../CardWithHeader/CardWithHeader';
import Timeline from '../../Timeline/Timeline';
import text from '../../../constants/translates';
import { CARD_TYPE, NEW_BUY_STATE } from '../../../constants/global-constants';
import './style.scss';
import styles from './style';

const CardAchat = ({ achat, collapsed }) => {
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
          {text.formatString(text.achat.title, {
            contractNumber: achat.contractNumber,
            bookingDate: achat.bookingDate
          })}
        </p>
      </Grid>
      <Grid item xs={12} className={getTimelineClassName()}>
        <Timeline
          steps={NEW_BUY_STATE}
          activeStep={NEW_BUY_STATE.findIndex(
            stat => stat.key === achat.contractStatusCode
          )}
        />
      </Grid>
      <Grid item xs={12} className={getTimelineTextClassName()}>
        <p className="timeline-card__text">
          {
            NEW_BUY_STATE.find(sta => sta.key === achat.contractStatusCode)
              ?.name
          }
        </p>
      </Grid>
      <Grid item xs={12} md={getMd()}>
        <Grid container>
          <Grid item xs={12}>
            <p className="achat-card__text">
              {`${text.achat.program}: ${achat.programCode} - ${achat.programName}`}
            </p>
          </Grid>
          <Grid item xs={12}>
            <p className="achat-card__text">
              {`${text.achat.lot}: ${achat.lotNumber}`}
            </p>
          </Grid>
          <Grid item xs={12}>
            <p className="achat-card__text">
              {`${text.achat.deliveryDate}: ${achat.deliveryDate}`}
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
              {`${text.achat.filial}: ${achat.subsidiary}`}
            </p>
          </Grid>
          <Grid item xs={12}>
            <p className="achat-card__text">
              {`${text.achat.commercial}: ${achat.commercial}`}
            </p>
          </Grid>
          <Grid item xs={12}>
            <div className="icon-label__container">
              <PhoneIcon className={classes.icon} />
              <p className="client-card__text">{achat.phoneNumber}</p>
            </div>
          </Grid>
          <Grid item xs={12}>
            <div className="icon-label__container">
              <MailIcon className={classes.icon} />
              <p className="client-card__text">{achat.email}</p>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
  return <CardWithHeader cardType={CARD_TYPE.newBuy} content={content} />;
};

CardAchat.propTypes = {
  achat: PropTypes.oneOf(PropTypes.object),
  collapsed: PropTypes.bool
};

export default CardAchat;
