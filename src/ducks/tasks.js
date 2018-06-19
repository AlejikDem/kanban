import * as R from 'ramda';

export const SET_ACTIVE_TASK_ID = 'SET_ACTIVE_TASK_ID';
export const SET_TASKS = 'SET_TASKS';
export const MOVE_TASK = 'MOVE_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';
export const TIMER_END = 'TIMER_END';

export const setActiveTaskId = id => ({
  type: SET_ACTIVE_TASK_ID,
  payload: id
});

export const setTasks = tasks => ({
  type: SET_TASKS,
  payload: tasks
});

export const moveTask = (id, newStatus) => ({
  type: MOVE_TASK,
  payload: { id, newStatus }
});

export const removeTask = id => ({
  type: REMOVE_TASK,
  payload: id
});

export const timerEnd = () => ({
  type: TIMER_END
});

const mockedTasks = [
  {
    id: 0,
    title: 'Buy milk',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    status: 0,
    priority: 0,
    estimate: 1,
    tomatos: [{ status: 0 }],
    createdAt: new Date().toISOString(),
  },
  {
    id: 1,
    title: 'Make layout',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    status: 0,
    priority: 2,
    estimate: 2,
    tomatos: [{ status: 1 }, { status: 0 }],
    createdAt: new Date().toISOString(),
  },
  {
    id: 2,
    title: 'Do something',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    status: 0,
    priority: 0,
    estimate: 1,
    tomatos: [{ status: 0 }],
    createdAt: new Date().toISOString(),
  },
  {
    id: 3,
    title: 'Relax',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    status: 0,
    priority: 1,
    estimate: 3,
    tomatos: [{ status: 0 }, { status: 0 }, { status: 0 }],
    createdAt: new Date().toISOString(),
  },
];

const initialState = {
  activeTaskId: null,
  tasks: mockedTasks
};

export default function tasks(state = initialState, { type, payload }) {
  switch(type) {
    case SET_ACTIVE_TASK_ID:
      return {
        ...state,
        activeTaskId: payload
      };
    case SET_TASKS:
      return {
        ...state,
        tasks: payload
      };
    case MOVE_TASK:
      return {
        ...state,
        tasks: R.map(
          item => R.propEq('id', payload.id, item) ? {...item, status: payload.newStatus} : item,
          state.tasks
        )
      };
    case REMOVE_TASK:
      return {
        ...state,
        activeTaskId: null,
        tasks: R.filter(
          item => item.id !== payload,
          state.tasks
        )
      };
    default:
      return state;
  }
}