import {
  DOCUMENT_CREATE,
  DOCUMENT_UPDATE,
  DOCUMENT_CLEAR,
  DOCUMENT_SAVE,
  DOCUMENT_DELETE
} from '../actions/types';

const INITIAL_STATE = {
  name: '',
  number: '',
  image: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DOCUMENT_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    case DOCUMENT_CLEAR:
      return INITIAL_STATE;
    case DOCUMENT_CREATE:
      return INITIAL_STATE;
    case DOCUMENT_SAVE:
      return INITIAL_STATE;
    case DOCUMENT_DELETE:
      return INITIAL_STATE;
    default:
      return state;
  }
};
