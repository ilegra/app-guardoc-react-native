import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import DocumentFormReducer from './DocumentFormReducer';

export default combineReducers({
  documentForm: DocumentFormReducer,
  auth: AuthReducer
});
