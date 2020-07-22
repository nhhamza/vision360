import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepConnector from '@material-ui/core/StepConnector';
import style from './style';

const CustomConnector = withStyles(style().connector)(StepConnector);
const CustomStepIcon = props => {
  const { active, completed } = props;
  const classes = makeStyles(style)();
  return (
    <div
      className={clsx(classes.rootStepIcon, {
        [classes.activeStepIcon]: active,
        [classes.completedStepIcon]: completed
      })}
    />
  );
};

const Timeline = ({ steps, activeStep }) => {
  const classes = makeStyles(style)();
  return (
    <div className={classes.timeline}>
      <Stepper
        alternativeLabel
        activeStep={activeStep}
        connector={<CustomConnector />}
      >
        {steps?.map(step => (
          <Step key={step.key}>
            <StepLabel StepIconComponent={CustomStepIcon}>
              {step.name}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
};

Timeline.propTypes = {
  steps: PropTypes.arrayOf(PropTypes.object()),
  activeStep: PropTypes.number
};

CustomStepIcon.propTypes = {
  active: PropTypes.bool,
  completed: PropTypes.bool
};

export default Timeline;
