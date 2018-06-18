import { createSelector } from 'reselect';

const getTasks = state => state.tasks.tasks;
const getActiveTaskId = state => state.tasks.activeTaskId;
const getColumnId = (state, props) => props.item.id;

export const makeGetTasksByStatus = () => createSelector(
  [getTasks, getColumnId],
  (tasks, id) => tasks.filter(task => task.status === id)
);

export const getActiveTask = createSelector(
  [getTasks, getActiveTaskId],
  (tasks, id) => id !== null ? tasks.find(task => task.id === id) : null
);