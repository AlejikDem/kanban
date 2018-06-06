import { START_DRAGGING, setActiveMoves } from '../ducks/dragging';

import { map } from 'rxjs/operators';

const getActiveMoves = (id, columns) => columns.find(column => column.id === id).moves;
const setMoves = (status, columns) => setActiveMoves(getActiveMoves(status, columns));

export const onStartDragging = (action$, store) =>
  action$.ofType(START_DRAGGING)
    .pipe(
      map(
        ({ payload }) => setMoves(payload.status, store.getState().columns))
      );