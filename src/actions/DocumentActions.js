import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  DOCUMENT_UPDATE,
  DOCUMENT_CLEAR,
  DOCUMENT_SAVE,
  DOCUMENT_CREATE,
  DOCUMENT_FETCH,
  DOCUMENT_DELETE
} from './types';

export const documentUpdate = ({ prop, value }) => {
  return {
    type: DOCUMENT_UPDATE,
    payload: { prop, value }
  };
};

export const documentCreate = ({ name, number, image }) => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/documents`)
      .push({ name, number, image })
      .then(() => {
        Actions.documentList();
        dispatch({ type: DOCUMENT_CREATE });
      });
  };
};

export const documentFetch = () => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/documents`)
      .on('value', snapshot => {
        dispatch({ type: DOCUMENT_FETCH, payload: snapshot.val() });
      });
  };
};

export const documentSave = ({ name, number, image, uid }) => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/documents/${uid}`)
      .set({ name, number, image })
      .then(() => {
        Actions.documentList();
        dispatch({ type: DOCUMENT_SAVE });
      });
  };
};

export const documentDelete = ({ uid }) => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/documents/${uid}`)
      .remove()
      .then(() => {
        Actions.documentList();
        dispatch({ type: DOCUMENT_DELETE });
      });
  };
};

export const documentClear = () => {
    return ({ type: DOCUMENT_CLEAR });
};
