import {
  DOCUMENT_CREATE,
  DOCUMENT_UPDATE
} from '../actions/types';

const INITIAL_STATE = {
  name: '',
  number: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DOCUMENT_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    default:
      return state;
  }
};
