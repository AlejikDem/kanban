import React from 'react';
import { css } from 'emotion';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

import { PRIORITIES_NAMES, PRIORITIES_COLORS, POMODORO_COLOR } from '../../../../helpers/constants';

const wrapper = css`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const noActiveTask = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const left = css`
  width: 73%;
`;

const right = css`
  width: 22%;
`;

const top = css`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`;

const title = css`
  font-size: 20px;
  font-weight: 600;
`;

const chapterTitle = css`
  margin-bottom: 10px;
`;

const dash = css`
  margin: 0 5px;
`;

const priority = css``;

const date = css`
  font-size: 12px;
  color: #888;
  margin-bottom: 5px;
`;

const pomodor = css`
  width: 18px;
  height: 18px;
  border: 1px solid #888;
  border-radius: 50%;
  margin-right: 5px;
`;

const chapter = css`
  margin-bottom: 10px;
`;

const tomatos = css`
  display: flex;
  margin-bottom: 10px;
`;

const icon = css`
  cursor: pointer;
`;

const actions = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ActiveTask = ({ activeTask, removeTask }) => {
  return activeTask ? (
    <div className={wrapper}>
      <div className={left}>
        <div className={top}>
          <div className={title}>{activeTask.title}</div>
          <div className={dash}>-</div>
          <div
            className={priority}
            style={{ color: PRIORITIES_COLORS[activeTask.priority] }}
          >
            {PRIORITIES_NAMES[activeTask.priority]}
          </div>
        </div>
        <div className={date}>{activeTask.createdAt}</div>
        <div>{activeTask.description}</div>
      </div>
      <div className={right}>
        <div className={chapter}>Estimate: {activeTask.estimate}</div>
        <div className={chapter}>
          <div className={chapterTitle}>Tomatos:</div>
          <div className={tomatos}>
            {activeTask.tomatos.map(((item, i) => (
              <div
                className={pomodor}
                key={i}
                style={{ backgroundColor: POMODORO_COLOR[item.status] }}
              />
            )))}
          </div>
        </div>
        <div>
          <div className={chapterTitle}>Actions</div>
          <div className={actions}>
            <FontAwesomeIcon className={icon} size="2x" icon="angle-left" />
            <FontAwesomeIcon className={icon} size="lg" icon="edit" color="orange" />
            <FontAwesomeIcon
              className={icon}
              size="lg"
              icon="trash-alt"
              color="red"
              onClick={removeTask.bind(null, activeTask.id)}
            />
            <FontAwesomeIcon className={icon} size="2x" icon="angle-right" />
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className={noActiveTask}>
      <div>Please, pick a Task</div>
    </div>
  );
};

export default ActiveTask;