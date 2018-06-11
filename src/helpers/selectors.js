import { createSelector } from 'reselect';

const getTasks = state => state.tasks;
const getColumnId = (state, props) => props.item.id;

export const makeGetTasksByStatus = () => createSelector(
  [getTasks, getColumnId],
  (tasks, id) => tasks.filter(task => task.status === id)
);