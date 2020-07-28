import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import styles from './style';
import CardClient from '../../components/Cards/CardClient/CardClient';
import CardAchat from '../../components/Cards/CardAchat/CardAchat';
import CardSolution from '../../components/Cards/CardSolution/CardSolution';
import ACHAT_MOCK from '../../shared/fixtures/achatBuilded.json';
import SOLUTION_MOCK from '../../shared/fixtures/solutionBuilded.json';

const ResultItem = ({ item }) => {
  const classes = makeStyles(styles)();
  const [collapsed, setCollapsed] = useState(true);

  const getMd = () => {
    return collapsed ? 4 : 8;
  };
  return (
    <>
      <Grid id="clienGrid" item xs={12} sm={6} md={getMd()} lg={5} xl={4}>
        <CardClient
          onCollapseChanged={e => setCollapsed(e)}
          client={item.client}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={12 - getMd()} lg={7} xl={8}>
        <Grid container spacing={2} className={classes.contratsColumns}>
          <Grid item xs={10} sm={12}>
            <CardAchat achat={ACHAT_MOCK} collapsed={!collapsed} />
          </Grid>
          <Grid item xs={10} sm={12}>
            <CardSolution solution={SOLUTION_MOCK} collapsed={!collapsed} />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

ResultItem.propTypes = {
  item: PropTypes.oneOf(PropTypes.object)
};

export default ResultItem;
