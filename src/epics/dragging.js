import * as R from 'ramda';
import { of, merge } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';

import { START_DRAGGING, START_MOVING_TASK, setActiveMoves, resetDragging  } from '../ducks/dragging';
import { moveTask } from '../ducks/tasks';

const getCurrentStatus = (id, columns) => R.find(R.propEq('id', id), columns);;

const setMoves = R.compose(
  setActiveMoves,
  R.prop('moves'),
  getCurrentStatus
);

export const onStartDragging = (action$, store) =>
  action$.ofType(START_DRAGGING)
    .pipe(
      map(
        ({ payload }) => setMoves(
          payload.status,
          store.getState().columns
        )));

export const onStartMovingTask = action$ =>
  action$.ofType(START_MOVING_TASK)
    .pipe(
      mergeMap(
        ({ payload }) => merge(
          of(moveTask(payload.id, payload.newStatus)),
          of(resetDragging())
        )));