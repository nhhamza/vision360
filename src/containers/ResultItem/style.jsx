const styles = theme => ({
  contratsColumns: {
    [theme.breakpoints.down('xs')]: {
      display: 'flex',
      flexWrap: 'nowrap',
      overflowX: 'auto'
    }
  }
});

export default styles;
