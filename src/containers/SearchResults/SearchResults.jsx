import React from 'react';
import { useParams } from 'react-router-dom';
import { withRouter } from 'react-router';

const SearchResults = () => {
  const { text } = useParams();
  return <h1>Search of {text}</h1>;
};

export default withRouter(SearchResults);
