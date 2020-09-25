import { BEGIN_API_CALL, API_CALL_ERROR } from './actionTypes';

export const apiCallBegin = () => {
  return {type: BEGIN_API_CALL};
};


export const apiCallFails = () => {
  return {type: API_CALL_ERROR};
};
