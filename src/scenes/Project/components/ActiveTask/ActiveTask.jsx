import React from 'react';
import { css } from 'emotion';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

import { PRIORITIES_NAMES, PRIORITIES_COLORS, POMODORO_COLOR } from '../../../../helpers/constants';

const activeTask = css`
  display: flex;
  justify-content: space-between;
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

const estimate = css`
  margin-bottom: 10px;
`;

const tomatos = css`
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

const mock = {
  id: 0,
  title: 'Buy milk',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  status: 0,
  priority: 0,
  estimate: 1,
  tomatos: [{ status: 0 }],
  createdAt: new Date().toISOString(),
};

const ActiveTask = () => {
  return (
    <div className={activeTask}>
      <div className={left}>
        <div className={top}>
          <div className={title}>{mock.title}</div>
          <div className={dash}>-</div>
          <div
            className={priority}
            style={{ color: PRIORITIES_COLORS[mock.priority] }}
          >
            {PRIORITIES_NAMES[mock.priority]}
          </div>
        </div>
        <div className={date}>{mock.createdAt}</div>
        <div>{mock.description}</div>
      </div>
      <div className={right}>
        <div className={estimate}>Estimate: {mock.estimate}</div>
        <div className={tomatos}>
          <div className={chapterTitle}>Tomatos:</div>
          {mock.tomatos.map(((item, i) => (
            <div
              className={pomodor}
              key={i}
              style={{ backgroundColor: POMODORO_COLOR[item.status] }}
            />
          )))}
        </div>
        <div>
          <div className={chapterTitle}>Actions</div>
          <div className={actions}>
            <FontAwesomeIcon className={icon} size="2x" icon="angle-left" />
            <FontAwesomeIcon className={icon} size="lg" icon="edit" color="orange" />
            <FontAwesomeIcon className={icon} size="lg" icon="trash-alt" color="red" />
            <FontAwesomeIcon className={icon} size="2x" icon="angle-right" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActiveTask;