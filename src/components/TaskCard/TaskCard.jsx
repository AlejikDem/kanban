import React from 'react';
import { DragSource } from 'react-dnd';
import { connect } from 'react-redux';
import { compose, toClass } from 'recompose';
import { css } from 'emotion';

import { TASK } from '../../helpers/dragItems';

import { startDragging } from '../../ducks/dragging';

const card = css`
  cursor: pointer;
`;

const TaskCard = ({ connectDragSource, isDragging }) => {
  return connectDragSource(
    <div className={card}>
      TaskCard
    </div>
  );
};

const source = {
  beginDrag(props) {
    const task = {
      id: 0,
      title: 'Buy milk',
      status: 0,
    };
    props.startDragging(task);
    return task;
  },
  endDrag(props, monitor) {
    if (!monitor.didDrop()) {
      return;
    }
    const item = monitor.getItem();
    const result = monitor.getDropResult();
    console.log(item, result);
  },
};

const collect = (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging(),
});

const mapActions = {
  startDragging
};

const enhance = compose(
  connect(() => ({}), mapActions),
  DragSource(TASK, source, collect),
  toClass
);

export default enhance(TaskCard);