import * as R from 'ramda';

export const buildTomato = (status, column) => ({
  status,
  completed: new Date().toISOString(),
  column
});

export const getTaskWithUpdatedTomatos = (activeTaskIndex, tasks) => {
  const activeTask = tasks[activeTaskIndex];
  const currStatus = activeTask.status;
  const tomatos = R.prop('tomatos', activeTask);

  const nextTomatoIndex = R.findIndex(R.propEq('status', 0), tomatos);

  const newTomatos = R.gte(nextTomatoIndex, 0)
    ? R.update(nextTomatoIndex, buildTomato(1, currStatus) , tomatos)
    : R.append(buildTomato(2, currStatus), tomatos);

  return R.assoc('tomatos', newTomatos, activeTask);
};