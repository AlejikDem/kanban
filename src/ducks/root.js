import { combineReducers } from 'redux';

import dragging from './dragging';
import tasks from './tasks';
import columns from './columns';

export default combineReducers({
  dragging,
  tasks,
  columns
});