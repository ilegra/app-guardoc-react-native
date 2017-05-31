import {
  DOCUMENT_UPDATE,
  DOCUMENT_CLEAR,
  DOCUMENT_SAVE,
  DOCUMENT_CREATE
} from './types';

export const documentUpdate = ({ prop, value }) => {
  return {
    type: DOCUMENT_UPDATE,
    payload: { prop, value }
  };
};

export const documentCreate = ({ name, number, image }) => {
  //todo
};

export const documentSave = ({ name, number, image, uid }) => {
  //todo
};

export const documentDelete = ({ uid }) => {
  //todo
};

export const documentClear = () => {
    return ({ type: DOCUMENT_CLEAR });
};
