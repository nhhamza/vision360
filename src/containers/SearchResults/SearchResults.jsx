import React from 'react';
import { useParams } from 'react-router-dom';
import { withRouter } from 'react-router';
import Grid from '@material-ui/core/Grid';
import Header from '../../components/Header/Header';
import CardWithHeader from '../../components/Cards/CardWithHeader/CardWithHeader';
import t from '../../constants/translates';
import {
  CARD_TYPE,
  BADGE_TYPE,
  NEW_BUY_STATE
} from '../../constants/global-constants';
import Timeline from '../../components/Timeline/Timeline';
import './style.scss';

const SearchResults = () => {
  const { text } = useParams();
  return (
    <>
      <Header />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <div className="search-title">
            <p className="search-title__count">2</p>
            <p className="search-title__text">{t.searchResults.results}</p>
            <p>{text}</p>
          </div>
        </Grid>
        <Grid item xs={12}>
          <CardWithHeader
            cardType={CARD_TYPE.identity}
            badge={BADGE_TYPE.vip}
            content={<h1>Content 1</h1>}
          />
        </Grid>
        <Grid item xs={12}>
          <CardWithHeader
            cardType={CARD_TYPE.newBuy}
            content={<Timeline steps={NEW_BUY_STATE} activeStep={3} />}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default withRouter(SearchResults);
