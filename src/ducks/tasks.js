const MOVE_TASK = 'MOVE_TASK';

export const moveTask = (id, newStatus) => ({
  type: MOVE_TASK,
  payload: { id, newStatus }
});

const mockedTasks = [
  {
    id: 0,
    title: 'Buy milk',
    description: 'Lorem Ipsum',
    status: 0,
    priority: 0,
    estimate: 1,
    tomatos: [{ status: 0 }]
  },
  {
    id: 1,
    title: 'Make layout',
    description: 'Lorem Ipsum',
    status: 0,
    priority: 2,
    estimate: 2,
    tomatos: [{ status: 1 }, { status: 0 }]
  },
  {
    id: 2,
    title: 'Do something',
    description: 'Lorem Ipsum',
    status: 0,
    priority: 0,
    estimate: 1,
    tomatos: [{ status: 0 }]
  },
  {
    id: 3,
    title: 'Relax',
    description: 'Lorem Ipsum',
    status: 0,
    priority: 1,
    estimate: 3,
    tomatos: [{ status: 0 }, { status: 0 }, { status: 0 }]
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