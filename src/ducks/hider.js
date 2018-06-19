const TOGGLE_HIDER = 'TOGGLE_HIDER';

export const toggleHider = (bool = false) => ({
  type: TOGGLE_HIDER,
  payload: bool
});

const initialState = {
  showHider: false
};

export default function (state = initialState, { type, payload }) {
  switch(type) {
    case TOGGLE_HIDER:
      return {
        ...state,
        showHider: payload
      };
    default:  
      return state;
  }
}