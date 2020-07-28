const styles = theme => ({
  achatContainer: {
    padding: '14px'
  },
  icon: {
    marginRight: '5px'
  },
  separatorNoCollapsed: {
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  },
  separatorCollapsed: {
    [theme.breakpoints.up('lg')]: {
      display: 'none'
    }
  },
  timelineText: {
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  },
  timelineTextCollapsed: {
    [theme.breakpoints.up('lg')]: {
      display: 'none'
    }
  },
  timeline: {
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  timelineCollapsed: {
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  }
});

export default styles;
