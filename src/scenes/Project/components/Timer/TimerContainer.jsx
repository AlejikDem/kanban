import { compose, pure, withStateHandlers, withHandlers } from 'recompose';
import { connect } from 'react-redux';

import Timer from './Timer';

import { toggleHider } from '../../../../ducks/hider';
import { timerEnd } from '../../../../ducks/tasks';

const DEFAULT_MINUTES = 25;

const count = ({
  seconds,
  minutes,
  secondsTic,
  minutesTic,
  intervalId,
  resetCounter,
  timerEnd
}) => () => {
  if (minutes === 0 && seconds === 0) {
    timerEnd();

    clearInterval(intervalId);
    resetCounter();
  }
  else if (seconds === 0) {
    minutesTic();
  } else {
    secondsTic();
  }
};

const start = ({ activateCounter, setIntervalId, count, toggleHider }) => () => {
  const intervalId = setInterval(count, 1000);
  toggleHider(true);
  activateCounter();
  setIntervalId(intervalId);
};

const stop = ({ intervalId, resetCounter, toggleHider }) => () => {
  clearInterval(intervalId);
  toggleHider(false);
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

const mapState = ({ tasks }) => ({
  activeTaskId: tasks.activeTaskId
});

const mapActions = {
  toggleHider,
  timerEnd
};

const enhance = compose(
  connect(mapState, mapActions),
  withStateHandlers(initialState, stateHandlers),
  withHandlers({ count }),
  withHandlers({ start, pause, stop }),
  pure
);

export default enhance(Timer);