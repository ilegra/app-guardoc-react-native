import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER
} from './types';

export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

export const loginUser = () => {
    return function (dispatch) {
        //dispatch({ type: LOGIN_USER });

      firebase.auth().signInAnonymously()
        .then(user => loginUserSuccess(dispatch, user))
        .catch((error) => {
        console.log(error);
        });
    };
};

const loginUserFail = (dispatch) => {
  //todo
};

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  });
  Actions.main();
};
