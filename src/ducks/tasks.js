const MOVE_TASK = 'MOVE_TASK';

export const moveTask = (id, newStatus) => ({
  type: MOVE_TASK,
  payload: { id, newStatus }
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
    createdAt: new Date(),
  },
  {
    id: 1,
    title: 'Make layout',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    status: 0,
    priority: 2,
    estimate: 2,
    tomatos: [{ status: 1 }, { status: 0 }],
    createdAt: new Date(),
  },
  {
    id: 2,
    title: 'Do something',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    status: 0,
    priority: 0,
    estimate: 1,
    tomatos: [{ status: 0 }],
    createdAt: new Date(),
  },
  {
    id: 3,
    title: 'Relax',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    status: 0,
    priority: 1,
    estimate: 3,
    tomatos: [{ status: 0 }, { status: 0 }, { status: 0 }],
    createdAt: new Date(),
  },
];

const initialState = mockedTasks;

export default function tasks(state = initialState, { type, payload }) {
  switch(type) {
    case MOVE_TASK:
      return state.map(
        item => item.id === payload.id ? {...item, status: payload.newStatus} : item
      );
    default:
      return state;
  }
}