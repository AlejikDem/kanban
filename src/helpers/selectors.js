import * as R from 'ramda';
import { createSelector } from 'reselect';

const getTasks = tasks => R.prop('tasks', tasks);
const getActiveTaskId = tasks => R.prop('activeTaskId', tasks);
const getColumnId = (tasks, item) => R.prop('id', item);

export const makeGetTasksByStatus = () => createSelector(
  [getTasks, getColumnId],
  (tasks, id) => R.filter(task => task.status === id, tasks)
);

export const getActiveTask = createSelector(
  [getTasks, getActiveTaskId],
  (tasks, id) => R.isNil(id)
    ? null
    : R.find(R.propEq('id', id), tasks)
);