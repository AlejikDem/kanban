import React from 'react';
import { css } from 'emotion';

const card = css`
  cursor: pointer;
  border: 1px solid #ccc;
  background-color: #fff;
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