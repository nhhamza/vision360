import React from 'react';
import Grid from '@material-ui/core/Grid';
import Logo from '../../components/Logo/Logo';
import CardHome from '../../components/Cards/CardHome/CardHome';
import './style.scss';

const Home = () => {
  return (
    <div className="home-container">
      <Grid container>
        <Grid item xs={12}>
          <Logo />
        </Grid>
        <Grid item xs={12}>
          <CardHome />
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
