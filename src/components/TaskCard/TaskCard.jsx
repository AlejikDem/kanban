import React from 'react';
import { css } from 'emotion';

const card = css`
  cursor: pointer;
  background-color: #ccc;
  margin-bottom: 10px;
  padding: 2px;
`;

const TaskCard = ({ connectDragSource, isDragging, task }) => {
  return isDragging ? null : connectDragSource(
    <div className={card}>
      { task.title }
    </div>
  );
};

export default TaskCard;