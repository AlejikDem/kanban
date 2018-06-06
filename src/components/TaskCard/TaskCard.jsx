import React from 'react';
import { DragSource } from 'react-dnd';
import { toClass } from 'recompose';
import { css } from 'emotion';

import { TASK } from '../../helpers/dragItems';

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
    console.log('begin');
    return ({
      hello: 'world',
    });
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

export default DragSource(TASK, source, collect)(
  toClass(TaskCard)
);