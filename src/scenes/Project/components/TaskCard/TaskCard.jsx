import React from 'react';
import { css } from 'emotion';

import { PRIORITIES_COLORS, POMODORO_COLOR } from '../../../../helpers/constants';

const card = css`
  cursor: pointer;
  border: 1px solid #ccc;
  background-color: #fff;
  margin-bottom: 10px;
  padding: 2px;
`;

const top = css`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`;

const prior = css`
  width: 10px;
  height: 10px;
  margin-right: 5px;
`;

const title = css``;

const pomodoros = css`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const pomodor = css`
  width: 12px;
  height: 12px;
  border: 1px solid #888;
  border-radius: 50%;
  margin-right: 5px;
`;

const TaskCard = ({ connectDragSource, isDragging, task, setActiveTaskId }) => {
  return isDragging ? null : connectDragSource(
    <div
      className={card}
      onClick={setActiveTaskId.bind(null, task.id)}
    >
      <div className={top}>
        <div
          className={prior}
          style={{ backgroundColor: PRIORITIES_COLORS[task.priority]}}
        />
        <div className={title}>{ task.title }</div>
      </div>
      <div className={pomodoros}>
        {task.tomatos.map(((item, i) => (
          <div
            className={pomodor}
            key={i}
            style={{ backgroundColor: POMODORO_COLOR[item.status] }}
          />
        )))}
      </div>
    </div>
  );
};

export default TaskCard;