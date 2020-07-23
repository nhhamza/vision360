import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import {
  CARD_TYPE,
  BADGE_TYPE,
  NEW_BUY_STATE
} from '../../constants/global-constants';
import styles from './style';
import CardWithHeader from '../../components/Cards/CardWithHeader/CardWithHeader';
import Timeline from '../../components/Timeline/Timeline';

const ResultItem = () => {
  const classes = makeStyles(styles)();
  return (
    <>
      <Grid item xs={12} sm={6} md={4}>
        <CardWithHeader
          cardType={CARD_TYPE.identity}
          badge={BADGE_TYPE.vip}
          content={<h1>Content 1</h1>}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={8}>
        <Grid container spacing={2} className={classes.contratsColumns}>
          <Grid item xs={10} sm={12}>
            <CardWithHeader
              cardType={CARD_TYPE.newBuy}
              content={<Timeline steps={NEW_BUY_STATE} activeStep={3} />}
            />
          </Grid>
          <Grid item xs={10} sm={12}>
            <CardWithHeader
              cardType={CARD_TYPE.finance}
              content={<Timeline steps={NEW_BUY_STATE} activeStep={3} />}
            />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default ResultItem;
