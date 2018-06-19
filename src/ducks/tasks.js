import * as R from 'ramda';

const SET_ACTIVE_TASK_ID = 'SET_ACTIVE_TASK_ID';
const MOVE_TASK = 'MOVE_TASK';
const ADD_TOMATO = 'ADD_TOMATO';

export const setActiveTaskId = id => ({
  type: SET_ACTIVE_TASK_ID,
  payload: id
});

export const moveTask = (id, newStatus) => ({
  type: MOVE_TASK,
  payload: { id, newStatus }
});

export const addTomato = () => ({
  type: ADD_TOMATO
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

const buildTomato = (status, column) => ({
  status,
  completed: new Date().toISOString(),
  column
});

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
    case MOVE_TASK:
      return {
        ...state,
        tasks: state.tasks.map(
          item => item.id === payload.id ? {...item, status: payload.newStatus} : item
        )
      };
    case ADD_TOMATO:
      const { tasks, activeTaskId } = state;
      const activeTaskIndex = R.findIndex(R.propEq('id', activeTaskId), tasks);
      const activeTask = tasks[activeTaskIndex];
      const currStatus = activeTask.status;
      const tomatos = R.prop('tomatos', activeTask);

      const nextTomatoIndex = R.findIndex(R.propEq('status', 0), tomatos);

      const newTomatos = R.gte(nextTomatoIndex, 0)
        ? R.update(nextTomatoIndex, buildTomato(1, currStatus) , tomatos)
        : R.append(buildTomato(2, currStatus), tomatos);

      const newTask = R.assoc('tomatos', newTomatos, activeTask);

      return {
        ...state,
        tasks: R.update(activeTaskIndex, newTask, tasks)
      };
    default:
      return state;
  }
}