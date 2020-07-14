import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router';
import SearchIcon from '@material-ui/icons/Search';
import CardBase from '../CardBase/CardBase';
import Input from '../../Input/Input';
import text from '../../../constants/translates';
import ROUTES_CONSTANTS from '../../../constants/route.constants';

import styles from './style';
import './style.scss';

const CardHome = ({ history }) => {
  const classes = makeStyles(styles)();
  const [searchField, setSearchField] = useState('');

  const handleSearch = () => {
    history.push(`${ROUTES_CONSTANTS.researchBase}${searchField}`);
  };

  const children = (
    <div>
      <p className="card__title">{text.home.intro}</p>
      <p className="card__subtitle">{text.home.wraning}</p>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Input
            className={classes.input}
            placeholder={text.home.placeholder}
            onChange={field => setSearchField(field)}
          />
        </Grid>
        <Grid item xs={4}>
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            onClick={() => handleSearch()}
          >
            <span className="search__text">{text.home.search}</span>
            <SearchIcon className={classes.searchIcon} />
          </Button>
        </Grid>
      </Grid>
    </div>
  );

  return <CardBase Content={children} />;
};

CardHome.propTypes = {
  history: PropTypes.func
};

export default withRouter(CardHome);
