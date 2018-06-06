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
];

const initialState = mockedTasks;

export default function tasks(state = initialState, { type }) {
  switch(type) {
    default:
      return state;
  }
}