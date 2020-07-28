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
import text from '../../../constants/translates';
import styles from './style';
import { CARD_TYPE, BADGE_TYPE } from '../../../constants/global-constants';
import './style.scss';

const CardClient = ({ onCollapseChanged, client }) => {
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

  const getCheckIcon = isChecked => {
    if (isChecked) {
      return <CheckIcon className={classes.checkIcon} />;
    }

    return <ClearIcon className={classes.clearIcon} />;
  };

  const getBadge = (isVip, isPartenaire) => {
    if (isVip) {
      return BADGE_TYPE.vip;
    }

    if (isPartenaire) {
      return BADGE_TYPE.parthenship;
    }

    return null;
  };

  const content = (
    <>
      <Grid container>
        <Grid item xs={12}>
          <p className="client-card__title">{`${client.namePrefix} ${client.lastName} ${client.firstName}`}</p>
        </Grid>
        <Grid item xs={12} md={getMd()}>
          <Grid container className={classes.clientContainer}>
            <Grid container className={classes.sectionContainer}>
              <Grid item xs={12}>
                <p className="client-card__text">
                  {`${client.address.streetNumber} ${client.address.streetName}`}
                </p>
              </Grid>
              <Grid item xs={12}>
                <p className="client-card__text">{`${client.address.postalCode} ${client.address.city}`}</p>
              </Grid>
            </Grid>
            <Grid container className={classes.sectionContainer}>
              <Grid item xs={12}>
                <div className="icon-label__container">
                  <PhoneIcon className={classes.icon} />
                  <p className="client-card__text">
                    {`${text.client.mobile}: ${client.cellPhoneNumber}`}{' '}
                  </p>
                </div>
              </Grid>
              <Grid item xs={12}>
                <div className="icon-label__container">
                  <PhoneIcon className={classes.icon} />
                  <p className="client-card__text">{`${text.client.fix}: ${client.fixNumber}`}</p>
                </div>
              </Grid>
              <Grid item xs={12}>
                <div className="icon-label__container">
                  <MailIcon className={classes.icon} />
                  <p className="client-card__text">{`${text.client.email}: ${client.email}`}</p>
                </div>
              </Grid>
            </Grid>
            <Grid container className={classes.sectionContainer}>
              <Grid item xs={12}>
                <Grid container>
                  <Grid item xs={6}>
                    <p className="client-card__text">
                      {text.client.optin.mobile}
                    </p>
                  </Grid>
                  <Grid item xs={6}>
                    {getCheckIcon(client.optinCellPhone)}
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid container>
                  <Grid item xs={6}>
                    <p className="client-card__text">{text.client.optin.fix}</p>
                  </Grid>
                  <Grid item xs={6}>
                    {getCheckIcon(client.optinFix)}
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid container>
                  <Grid item xs={6}>
                    <p className="client-card__text">
                      {text.client.optin.email}
                    </p>
                  </Grid>
                  <Grid item xs={6}>
                    {getCheckIcon(client.optinEmail)}
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
                  <p className="client-card__text">{`${text.client.born} ${client.bornDate}`}</p>
                </Grid>
                <Grid item xs={12}>
                  <p className="client-card__text">à Villeneuve d&apos;Ascq</p>
                </Grid>
                <Grid item xs={12}>
                  <p className="client-card__text">Français</p>
                </Grid>
                <Grid item xs={12}>
                  <p className="client-card__text">{`${client.maritalStatus} / ${client.maritalStatusDetail}`}</p>
                </Grid>
              </Grid>
            </Grid>
            <Grid container className={classes.clientContainer}>
              <Grid container className={classes.sectionContainer}>
                <Grid item xs={12}>
                  <p className="client-card__text">{text.profesion}</p>
                </Grid>
                <Grid item xs={12}>
                  <div className="icon-label__container">
                    <PhoneIcon className={classes.icon} />
                    <p className="client-card__text">{`${text.client.pro}: ${client.proNumber}`}</p>
                  </div>
                </Grid>
                <Grid item xs={12}>
                  <Grid container>
                    <Grid item xs={6}>
                      <p className="client-card__text">
                        {text.client.optin.profesionel}
                      </p>
                    </Grid>
                    <Grid item xs={6}>
                      {getCheckIcon(client.optinPro)}
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
              {collapsed ? text.client.seeMore : text.client.seeLess}
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
      badge={getBadge(client.isVip, client.isPartenaire)}
      content={content}
    />
  );
};

CardClient.propTypes = {
  onCollapseChanged: PropTypes.func,
  client: PropTypes.oneOf(PropTypes.object)
};

export default CardClient;
