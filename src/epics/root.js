import { combineEpics } from 'redux-observable';

import { onStartDragging, onSuccessDragging } from './dragging';

export default combineEpics(
  onStartDragging,
  onSuccessDragging
);