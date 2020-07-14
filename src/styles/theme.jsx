import { createMuiTheme } from '@material-ui/core';

const backgroundColor = '#C82832';
const theme = createMuiTheme({
  props: {
    // Name of the component ⚛️
    MuiButtonBase: {
      // The default props to change
      disableRipple: true
    }
  },

  typography: {
    fontFamily: 'Avenir Next LT Pro',
    fontSize: 12
  },
  overrides: {
    MuiTypography: {
      body1: {
        fontFamily: 'Avenir Next LT Pro',
        fontWeight: 500,
        fontSize: 18
      }
    },

    MuiButton: {
      root: {
        fontFamily: 'Avenir Next LT Pro',
        fontWeight: 500,
        fontSize: '16px',
        height: '48px',
        color: '#4E5360',
        borderRadius: '18px',
        '&:hover': {
          backgroundColor,
          color: '#C82832',
          borderColor: '#C82832'
        }
      },
      outlinedPrimary: {
        color: '#C82832',
        borderColor: '#C82832',
        borderStyle: 'solid',
        borderWidth: 'thin',
        '&:hover': {
          backgroundColor,
          borderColor: backgroundColor,
          color: '#F5F6FA'
        }
      },
      containedPrimary: {
        backgroundColor: '#C82832',
        color: '#F5F6FA',
        '&:hover': {
          backgroundColor,
          borderColor: backgroundColor,
          color: '#F5F6FA'
        }
      },
      containedSecondary: {
        color: '#F5F6FA',
        backgroundColor: '#4E5360',
        '&:hover': {
          backgroundColor,
          borderColor: backgroundColor,
          color: '#F5F6FA'
        }
      }
    }
  }
});

export default theme;
