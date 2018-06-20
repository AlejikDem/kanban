import { combineReducers } from 'redux';

import dragging from './dragging';
import tasks from './tasks';
import columns from './columns';
import hider from './hider';
import projects from './projects';

export default combineReducers({
  dragging,
  tasks,
  columns,
  hider,
  projects
});