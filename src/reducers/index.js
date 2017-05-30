import { combineReducers } from 'redux';
import DocumentFormReducer from './DocumentFormReducer';

export default combineReducers({
  documentForm: DocumentFormReducer
});
