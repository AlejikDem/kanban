import { DragSource } from 'react-dnd';
import { connect } from 'react-redux';
import { compose, toClass, pure } from 'recompose';

import { startDragging, endDragging } from '../../ducks/dragging';
import { moveTask } from '../../ducks/tasks';
import { TASK } from '../../helpers/dragItems';

import TaskCard from './TaskCard';

const source = {
  beginDrag({ task, startDragging }) {
    startDragging(task);
    return task;
  },
  endDrag({ endDragging, moveTask }, monitor) {
    if (!monitor.didDrop()) {
      endDragging();
      return;
    }
    const item = monitor.getItem();
    const result = monitor.getDropResult();
    console.log(result, 'end Dragging');
    moveTask(item.id, result.columnId);
  },
};

const collect = (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging(),
});

const mapActions = {
  startDragging,
  endDragging,
  moveTask
};

const enhance = compose(
  connect(() => ({}), mapActions),
  DragSource(TASK, source, collect),
  toClass,
  pure
);

export default enhance(TaskCard);