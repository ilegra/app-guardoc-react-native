import {
  DOCUMENT_UPDATE,
  DOCUMENT_CLEAR
} from './types';

export const documentUpdate = ({ prop, value }) => {
  return {
    type: DOCUMENT_UPDATE,
    payload: { prop, value }
  };
};

export const documentClear = () => {
    return ({ type: DOCUMENT_CLEAR });
};
