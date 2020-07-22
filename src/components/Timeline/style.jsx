const styles = () => ({
  timeline: {
    width: '100%'
  },
  connector: {
    alternativeLabel: {
      top: 10,
      left: 'calc(-50% + 16px)',
      right: 'calc(50% + 16px)'
    },
    active: {
      '& $line': {
        borderColor: '#4E5360'
      }
    },
    completed: {
      '& $line': {
        borderColor: '#4E5360'
      }
    },
    line: {
      borderColor: '#8F97AD',
      borderTopWidth: 3,
      borderRadius: 3
    }
  },
  rootStepIcon: {
    backgroundColor: '#8F97AD',
    display: 'flex',
    width: 24,
    height: 24,
    borderRadius: '50%',
    alignItems: 'center'
  },
  activeStepIcon: {
    backgroundColor: '#35B990',
    width: 18,
    height: 18,
    border: '3px solid #4E5360'
  },
  completedStepIcon: {
    backgroundColor: '#4E5360'
  }
});

export default styles;
