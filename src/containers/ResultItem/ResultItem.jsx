import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { CARD_TYPE, NEW_BUY_STATE } from '../../constants/global-constants';
import styles from './style';
import CardWithHeader from '../../components/Cards/CardWithHeader/CardWithHeader';
import CardClient from '../../components/Cards/CardClient/CardClient';
import Timeline from '../../components/Timeline/Timeline';

const ResultItem = () => {
  const classes = makeStyles(styles)();
  const [collapsed, setCollapsed] = useState(true);

  const getMd = () => {
    return collapsed ? 4 : 8;
  };
  return (
    <>
      <Grid id="clienGrid" item xs={12} sm={6} md={getMd()} lg={5} xl={4}>
        <CardClient onCollapseChanged={e => setCollapsed(e)} />
      </Grid>
      <Grid item xs={12} sm={6} md={12 - getMd()} lg={7} xl={8}>
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
