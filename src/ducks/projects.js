export const SET_PROJECTS = 'SET_PROJECTS';

export const setProjects = projects => ({
  type: SET_PROJECTS,
  payload: projects
});

const mockedProjects = [
  {
    id: 1,
    title: 'Project 1',
    createdAt: new Date().toISOString(),
    columns: [0, 1, 2, 3]
  },
  {
    id: 2,
    title: 'Project 2',
    createdAt: new Date().toISOString(),
    columns: [0, 1, 2, 3]
  },
  {
    id: 3,
    title: 'Project 3',
    createdAt: new Date().toISOString(),
    columns: [0, 1, 2, 3]
  }
];

const initialState = {
  projects: mockedProjects
};

export default function (state = initialState, { type, payload }) {
  switch(type){
    case SET_PROJECTS:
      return {
        ...state,
        projects: payload
      };
    default:
      return state;
  }
}