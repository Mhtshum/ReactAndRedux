import * as authorApi from '../../api/authorApi';
import { authorActionsTypes } from './actionTypes';
import apiCallBegin from './apiCallsActions';

const loadAuthorsSuccess = (authors) => {
  return { type: authorActionsTypes.LOAD_AUTHORS_SUCCESS, authors};	
};

const loadAuthors = () => {
  return (dispatch) => {
    dispatch(apiCallBegin());
    return authorApi.getAuthors()
      .then( authors =>	dispatch(loadAuthorsSuccess(authors)))
      .catch( error => { 
        throw error;
      });
  };	
};

export { loadAuthorsSuccess, loadAuthors };

