import { combineEpics } from 'redux-observable';

import { onStartDragging, onStartMovingTask } from './dragging';
import { onTimerEnd } from './timer';

export default combineEpics(
  onStartDragging,
  onStartMovingTask,
  onTimerEnd
);