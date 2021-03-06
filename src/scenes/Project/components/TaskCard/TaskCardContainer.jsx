import * as R from 'ramda';
import { DragSource } from 'react-dnd';
import { connect } from 'react-redux';
import { compose, toClass, pure } from 'recompose';

import { startDragging, resetDragging, startMovingTask } from '../../../../ducks/dragging';
import { setActiveTaskId } from '../../../../ducks/tasks';
import { TASK } from '../../../../helpers/dragItems';

import TaskCard from './TaskCard';

const beginDrag = ({ task, startDragging }) => {
  startDragging(task);
  return task;
};

const endDrag = (
  { resetDragging, startMovingTask }, monitor
) => {
  if (!monitor.didDrop()) {
    resetDragging();
    return;
  }

  const taskId = R.prop('id', monitor.getItem());
  const newStatus = R.prop('columnId', monitor.getDropResult());
  
  startMovingTask(taskId, newStatus);
};

const source = {
  beginDrag,
  endDrag
};

const collect = (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging(),
});

const mapActions = {
  startDragging,
  resetDragging,
  startMovingTask,
  setActiveTaskId
};

const enhance = compose(
  connect(undefined, mapActions),
  DragSource(TASK, source, collect),
  toClass,
  pure
);

export default enhance(TaskCard);