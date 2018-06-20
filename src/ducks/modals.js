export const SHOW_CONFIRM_MODAL = 'SHOW_CONFIRM_MODAL';
export const HIDE_CONFIRM_MODAL = 'HIDE_CONFIRM_MODAL';
export const SHOW_ERROR_MODAL = 'SHOW_ERROR_MODAL';
export const HIDE_ERROR_MODAL = 'HIDE_ERROR_MODAL';

export const showConfirmModal = (text, fn) => ({
  type: SHOW_CONFIRM_MODAL,
  payload: { text, fn }
});

export const hideConfirmModal = () => ({
  type: HIDE_CONFIRM_MODAL
});

export const showErrorModal = text => ({
  type: SHOW_ERROR_MODAL,
  payload: text
});

export const hideErrorModal = () => ({
  type: HIDE_ERROR_MODAL
});

const initialState = {
  showConfirm: false,
  confirmText: '',
  confirmCallback: null,
  showError: false,
  errorText: ''
};

export default function modals (state = initialState, { type, payload }) {
  switch(type) {
    case SHOW_CONFIRM_MODAL:
      return {
        ...state,
        showConfirm: true,
        confirmText: payload.text,
        confirmCallback: payload.fn
      };
    case HIDE_CONFIRM_MODAL:
      return {
        ...state,
        showConfirm: false,
        confirmText: '',
        confirmCallback: null
      };
    case SHOW_ERROR_MODAL:
      return {
        ...state,
        showError: true,
        errorText: payload
      };
    case HIDE_ERROR_MODAL:
      return {
        ...state,
        showError: false,
        errorText: ''
      };
    default:
      return state;
  }
}