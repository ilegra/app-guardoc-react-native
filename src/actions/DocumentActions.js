import { DOCUMENT_UPDATE } from './types';

export const documentUpdate = ({ prop, value }) => {
  return {
    type: DOCUMENT_UPDATE,
    payload: { prop, value }
  };
};
