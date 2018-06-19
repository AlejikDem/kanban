import * as R from 'ramda';
import { of, merge } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

import { TIMER_END, setTasks } from '../ducks/tasks';
import { toggleHider } from '../ducks/hider';
import { getTaskWithUpdatedTomatos } from '../helpers/utils';

export const onTimerEnd = (action$, store) =>
  action$.ofType(TIMER_END)
    .pipe(
      mergeMap(() => {
        const { tasks, activeTaskId } = store.getState().tasks;

        const activeTaskIndex = R.findIndex(R.propEq('id', activeTaskId), tasks);
        const updatedTask = getTaskWithUpdatedTomatos(activeTaskIndex, tasks);
        const updatedTasks = R.update(activeTaskIndex, updatedTask, tasks);

        return merge(
          of(toggleHider(false)),
          of(setTasks(updatedTasks))
        );
      })
    );
    