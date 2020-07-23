import React from 'react';
import { useParams } from 'react-router-dom';
import { withRouter } from 'react-router';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../../components/Header/Header';
import ResultItem from '../ResultItem/ResultItem';
import styles from './style';
import t from '../../constants/translates';
import './style.scss';

const SearchResults = () => {
  const classes = makeStyles(styles)();
  const { text } = useParams();
  return (
    <>
      <Header />
      <Grid container spacing={2} className={classes.resultsContainer}>
        <Grid item xs={12}>
          <div className="search-title">
            <p className="search-title__count">2</p>
            <p className="search-title__text">{t.searchResults.results}</p>
            <p>{text}</p>
          </div>
        </Grid>
        <ResultItem />
        <Grid item xs={12}>
          <div className="separator"></div>
        </Grid>
        <ResultItem />
      </Grid>
    </>
  );
};

export default withRouter(SearchResults);
