import { combineEpics } from 'redux-observable';

import { onStartDragging, onSuccessDragging } from './dragging';
import { onTimerEnd } from './timer';

export default combineEpics(
  onStartDragging,
  onSuccessDragging,
  onTimerEnd
);