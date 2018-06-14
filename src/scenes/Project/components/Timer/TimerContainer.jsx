import {
  compose,
  pure,
  withStateHandlers,
  withHandlers
} from 'recompose';

import Timer from './Timer';

const DEFAULT_MINUTES = 25;

const count = ({ seconds, minutes, secondsTic, minutesTic, intervalId, resetCounter }) => () => {
  if (minutes === 0 && seconds === 0) {
    clearInterval(intervalId);
    resetCounter();
  }
  else if (seconds === 0) {
    minutesTic();
  } else {
    secondsTic();
  }
};

const start = ({ activateCounter, setIntervalId, count }) => () => {
  const intervalId = setInterval(count, 1000);

  activateCounter();
  setIntervalId(intervalId);
};

const stop = ({ intervalId, resetCounter }) => () => {
  clearInterval(intervalId);
  resetCounter();
};

const pause = ({ intervalId, setIntervalId }) => () => {
  clearInterval(intervalId);
  setIntervalId(null);
};

const initialState = {
  minutes: DEFAULT_MINUTES,
  seconds: 0,
  active: false,
  intervalId: null,
};

const stateHandlers = {
  resetCounter: () => () => ({
    active: false,
    intervalId: null,
    seconds: 0,
    minutes: DEFAULT_MINUTES
  }),
  secondsTic: ({ seconds }) => () => ({
    seconds: seconds - 1
  }),
  minutesTic: ({ minutes }) => () => ({
    seconds: 59,
    minutes: minutes - 1
  }),
  setIntervalId: () => intervalId => ({
    intervalId
  }),
  activateCounter: () => () => ({
    active: true
  })
};

const enhance = compose(
  withStateHandlers(initialState, stateHandlers),
  withHandlers({ count }),
  withHandlers({ start, pause, stop }),
  pure
);

export default enhance(Timer);