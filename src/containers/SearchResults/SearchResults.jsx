import React from 'react';
import { useParams } from 'react-router-dom';
import { withRouter } from 'react-router';
import Header from '../../components/Header/Header';
import t from '../../constants/translates';
import './style.scss';

const SearchResults = () => {
  const { text } = useParams();
  return (
    <>
      <Header />
      <div className="search-title">
        <p className="search-title__count">2</p>
        <p className="search-title__text">{t.searchResults.results}</p>
        <p>{text}</p>
      </div>
    </>
  );
};

export default withRouter(SearchResults);
