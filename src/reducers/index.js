import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import DocumentFormReducer from './DocumentFormReducer';
import DocumentReducer from './DocumentReducer';

export default combineReducers({
  documentForm: DocumentFormReducer,
  auth: AuthReducer,
  documents: DocumentReducer
});
