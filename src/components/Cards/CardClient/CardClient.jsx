import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Collapse from '@material-ui/core/Collapse';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import CardWithHeader from '../CardWithHeader/CardWithHeader';
import styles from './style';
import { CARD_TYPE, BADGE_TYPE } from '../../../constants/global-constants';
import './style.scss';

const CardClient = ({ onCollapseChanged }) => {
  const classes = makeStyles(styles)();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('lg'));
  const [collapsed, setCollapsed] = useState(true);

  useEffect(() => {
    setCollapsed(!matches);
  }, [matches]);

  const handleCollapse = () => {
    const newCol = !collapsed;
    setCollapsed(newCol);

    if (onCollapseChanged) {
      onCollapseChanged(newCol);
    }
  };

  const getMd = () => {
    return collapsed ? 12 : 6;
  };
  const content = (
    <>
      <Grid container>
        <Grid item xs={12}>
          <p className="client-card__title">Mr DUPONT Pierre</p>
        </Grid>
        <Grid item xs={12} md={getMd()}>
          <Grid container className={classes.clientContainer}>
            <Grid container className={classes.sectionContainer}>
              <Grid item xs={12}>
                <p className="client-card__text">
                  340 Avenue du Général de Gaulle
                </p>
              </Grid>
              <Grid item xs={12}>
                <p className="client-card__text">59000 LILLE</p>
              </Grid>
            </Grid>
            <Grid container className={classes.sectionContainer}>
              <Grid item xs={12}>
                <div className="icon-label__container">
                  <PhoneIcon className={classes.icon} />
                  <p className="client-card__text">Mobile: 06 94 73 26 32</p>
                </div>
              </Grid>
              <Grid item xs={12}>
                <div className="icon-label__container">
                  <PhoneIcon className={classes.icon} />
                  <p className="client-card__text">Fixe: 03 20 84 73 27</p>
                </div>
              </Grid>
              <Grid item xs={12}>
                <div className="icon-label__container">
                  <MailIcon className={classes.icon} />
                  <p className="client-card__text">Email: p.dupont@gmail.com</p>
                </div>
              </Grid>
            </Grid>
            <Grid container className={classes.sectionContainer}>
              <Grid item xs={12}>
                <Grid container>
                  <Grid item xs={6}>
                    <p className="client-card__text">Opt-in Tel mobile</p>
                  </Grid>
                  <Grid item xs={6}>
                    <CheckIcon className={classes.checkIcon} />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid container>
                  <Grid item xs={6}>
                    <p className="client-card__text">Opt-in Tel fixe</p>
                  </Grid>
                  <Grid item xs={6}>
                    <ClearIcon className={classes.clearIcon} />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid container>
                  <Grid item xs={6}>
                    <p className="client-card__text">Opt-in Email</p>
                  </Grid>
                  <Grid item xs={6}>
                    <CheckIcon className={classes.checkIcon} />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={getMd()}>
          <Collapse in={!collapsed} timeout={0}>
            <Grid container className={classes.clientContainer}>
              <Grid container className={classes.sectionContainer}>
                <Grid item xs={12}>
                  <p className="client-card__text">Né le 10/03/1975</p>
                </Grid>
                <Grid item xs={12}>
                  <p className="client-card__text">à Villeneuve d&apos;Ascq</p>
                </Grid>
                <Grid item xs={12}>
                  <p className="client-card__text">Français</p>
                </Grid>
                <Grid item xs={12}>
                  <p className="client-card__text">Marié / 2 enfants</p>
                </Grid>
              </Grid>
            </Grid>
            <Grid container className={classes.clientContainer}>
              <Grid container className={classes.sectionContainer}>
                <Grid item xs={12}>
                  <p className="client-card__text">
                    Cadres et profession intellect sup
                  </p>
                </Grid>
                <Grid item xs={12}>
                  <div className="icon-label__container">
                    <PhoneIcon className={classes.icon} />
                    <p className="client-card__text">Pro: 03 61 40 42 38</p>
                  </div>
                </Grid>
                <Grid item xs={12}>
                  <Grid container>
                    <Grid item xs={6}>
                      <p className="client-card__text">Opt-in Tel pro</p>
                    </Grid>
                    <Grid item xs={6}>
                      <ClearIcon className={classes.clearIcon} />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Collapse>
        </Grid>
      </Grid>
      <Grid container className={classes.footerContainer}>
        <Grid
          id="footer"
          item
          xs={12}
          className={classes.footerRow}
          onClick={handleCollapse}
        >
          <div className="icon-label__container">
            <p className="client-card__text">
              {collapsed ? 'En voir plus' : 'Réduire'}
            </p>
            {collapsed ? (
              <ExpandMoreIcon className={classes.expandIcon} />
            ) : (
              <ExpandLessIcon className={classes.expandIcon} />
            )}
            {collapsed ? (
              <ChevronRightIcon className={classes.chevronIcon} />
            ) : (
              <ChevronLeftIcon className={classes.chevronIcon} />
            )}
          </div>
        </Grid>
      </Grid>
    </>
  );
  return (
    <CardWithHeader
      cardType={CARD_TYPE.identity}
      badge={BADGE_TYPE.vip}
      content={content}
    />
  );
};

CardClient.propTypes = {
  onCollapseChanged: PropTypes.func
};

export default CardClient;
