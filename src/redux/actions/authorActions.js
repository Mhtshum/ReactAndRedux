import * as authorApi from '../../api/authorApi';
import { authorActionsTypes } from './actionTypes';

const loadAuthorsSuccess = (authors) => {
  return { type: authorActionsTypes.LOAD_AUTHORS_SUCCESS, authors};	
};

const loadAuthors = () => {
  return (dispatch) => {
    return authorApi.getAuthors()
      .then( authors =>	dispatch(loadAuthorsSuccess(authors)))
      .catch( error => { 
        throw error;
      });
  };	
};

export { loadAuthorsSuccess, loadAuthors };

