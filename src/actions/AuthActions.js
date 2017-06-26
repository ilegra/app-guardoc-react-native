import firebase from 'firebase';
import { Alert } from 'react-native';
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
    return (dispatch) => {
      firebase.auth().signInAnonymously()
        .then(user => loginUserSuccess(dispatch, user))
        .catch(() => {
        loginUserFail(dispatch);
        });
    };
};

export const loginUserWithEmailAndPassword = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER });
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => loginUserSuccess(dispatch, user))
      .catch(() => loginUserFail(dispatch));
  };
};

export const createUserAccount = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER });
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(user => {
       registeredAccount();
       loginUserSuccess(dispatch, user);
     })
      .catch(() => {
      notRegisteredAccount();
      loginUserFail(dispatch);
    });
  };
};

export const redefinePassword = ({ email }) => {
  const auth = firebase.auth();
  const emailAddress = email;
  return () => {
      auth.sendPasswordResetEmail(emailAddress)
      .then(() => {
        emailSend();
      })
      .catch(() => {
        emailNotRegistered();
      });
  };
};

const loginUserFail = (dispatch) => {
  dispatch({ type: LOGIN_USER_FAIL });
};

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  });
  Actions.main();
};


const emailSend = () => {
  alertMensage(
    'Email de alteração de senha enviado!',
    'Acesse o link do email e insira uma nova senha.',
    'OK');
};

const emailNotRegistered = () => {
  alertMensage('Email não encontrado!', 'Verifique se o email foi digitado corretamente.', 'OK');
};

const registeredAccount = () => {
    alertMensage('Conta registrada com sucesso!', 'Bem vindo ao GuarDOC.', 'CONTINUAR');
};

const notRegisteredAccount = () => {
    alertMensage('Conta não registrada.',
    'Ocorreu um erro ao criar sua conta. Informe um email válido e uma senha de no mínimo 6 caracteres.',
    'OK');
};

const alertMensage = (title, mensagem, button) => {
  Alert.alert(
  title,
  mensagem,
  [
    { text: button, onPress: () => {} },
  ],
  { cancelable: false }
  );
};
