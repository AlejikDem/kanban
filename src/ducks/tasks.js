const MOVE_TASK = 'MOVE_TASK';

export const moveTask = (id, newStatus) => ({
  type: MOVE_TASK,
  payload: { id, newStatus }
});

const mockedTasks = [
  {
    id: 0,
    title: 'Buy milk',
    status: 0,
  },
  {
    id: 1,
    title: 'Make layout',
    status: 0,
  },
  {
    id: 2,
    title: 'Do something',
    status: 0,
  },
  {
    id: 3,
    title: 'Relax',
    status: 0,
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