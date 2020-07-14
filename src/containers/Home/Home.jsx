import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Logo from '../../components/Logo/Logo';
import CardHome from '../../components/Cards/CardHome/CardHome';
import styles from './style';
import './style.scss';

const Home = () => {
  const classes = makeStyles(styles)();
  return (
    <div className="home-container">
      <Grid container spacing={2}>
        <Grid item xs={12} className={classes.gridLogo}>
          <Logo />
        </Grid>
        <Grid item xs={1} sm={2} md={3} lg={4} />
        <Grid item xs={10} sm={8} md={6} lg={4}>
          <CardHome />
        </Grid>
        <Grid item xs={1} sm={2} md={3} lg={4} />
      </Grid>
    </div>
  );
};

export default Home;
