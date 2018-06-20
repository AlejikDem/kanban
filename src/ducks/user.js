export const SET_USER = 'SET_USER';

export const setUser = (user) => ({
  type: SET_USER,
  payload: user
});

const mockedUser = {
  id: 0,
  name: 'Alejik',
  email: 'bob@rob.com',
  password: '1234567890'
};

const initialState = mockedUser;

export default function user (state = initialState, { type, payload }) {
  switch(type) {
    case SET_USER:
      return {
        ...state,
        user: payload
      };
    default:
      return state;
  }
}