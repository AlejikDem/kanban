import * as R from 'ramda';
import { compose, pure, withHandlers } from 'recompose';
import { connect } from 'react-redux';

import { getActiveTask } from '../../../../helpers/selectors';
import { removeTask } from '../../../../ducks/tasks';
import { startMovingTask } from '../../../../ducks/dragging';

import ActiveTask from './ActiveTask';

const mapState = ({ tasks, columns }, props) => ({
  activeTask: getActiveTask(tasks),
  columns
});

const mapActions = {
  removeTask,
  startMovingTask
};

const enhance = compose(
  connect(mapState, mapActions),
  withHandlers({
    moveTask: ({ activeTask, columns, startMovingTask }) => forward => {
      const { id, status } = activeTask;
      const currIndex = R.findIndex(R.propEq('id', status), columns);

      const check = forward
        ? R.lt(currIndex, columns.length - 1)
        : R.gt(currIndex, 0);

      const nextStatus = forward ? currIndex + 1 : currIndex - 1;

      if (check) startMovingTask(id, nextStatus);
    }
  }),
  pure
);

export default enhance(ActiveTask);