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
import CLIENT_MOCK from '../../shared/fixtures/clientBuilded.json';
import CLIENT_PART_MOCK from '../../shared/fixtures/clientBuilded-partenaire.json';

const SearchResults = () => {
  const classes = makeStyles(styles)();
  const { text } = useParams();
  const MOCK_RESULTS = [
    {
      client: CLIENT_MOCK
    },
    {
      client: CLIENT_PART_MOCK
    }
  ];
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
        <ResultItem item={MOCK_RESULTS[0]} />
        <Grid item xs={12}>
          <div className="separator"></div>
        </Grid>
        <ResultItem item={MOCK_RESULTS[1]} />
      </Grid>
    </>
  );
};

export default withRouter(SearchResults);
