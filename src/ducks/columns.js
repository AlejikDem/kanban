const mockedColumns = [
  {
    id: 0,
    title: 'Backlog',
    moves: [1],
  },
  {
    id: 1,
    title: 'In Progress',
    moves: [0, 2],
  },
  {
    id: 2,
    title: 'Testing',
    moves: [1, 3],
  },
  {
    id: 3,
    title: 'Done',
    moves: [0, 1, 2]
  }
];

const initialState = mockedColumns;

export default function columns(state = initialState, { type }) {
  switch(type) {
    default:
      return state;
  }
}