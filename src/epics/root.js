import { combineEpics } from 'redux-observable';

import { onStartDragging } from './dragging';

export default combineEpics(
  onStartDragging
);