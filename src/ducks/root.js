import { combineReducers } from 'redux';

import dragging from './dragging';
import tasks from './tasks';
import columns from './columns';
import hider from './hider';
import projects from './projects';
import user from './user';
import modals from './modals';

export default combineReducers({
  dragging,
  tasks,
  columns,
  hider,
  projects,
  user,
  modals
});