const styles = theme => ({
  clientContainer: {
    padding: '14px'
  },
  sectionContainer: {
    marginTop: '10px'
  },
  footerContainer: {
    background: 'rgba(200, 40, 50, 0.2)',
    height: '36px',
    alignContent: 'center',
    [theme.breakpoints.up('lg')]: {
      display: 'none'
    }
  },
  footerRow: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  icon: {
    marginRight: '5px'
  },
  checkIcon: {
    color: '#35B990'
  },
  clearIcon: {
    color: '#C82832'
  },
  expandIcon: {
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  },
  chevronIcon: {
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  }
});

export default styles;
