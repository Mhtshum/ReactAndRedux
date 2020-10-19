import * as authorApi from '../../api/authorApi';
import { authorActionsTypes } from './actionTypes';
import { apiCallBegin, apiCallFails } from './apiCallsActions';

const loadAuthorsSuccess = (authors) => {
  return { type: authorActionsTypes.LOAD_AUTHORS_SUCCESS, authors};	
};

const updateAuthorSuccess = (author) => {
  return { type: authorActionsTypes.UPDATE_AUTHOR_SUCCESS, author};	
};

const createAuthorSuccess = (author) => {
  return { type: authorActionsTypes.CREATE_AUTHOR_SUCCESS, author};	
};

const deleteAuthorSuccess = (author) => {
  return { type: authorActionsTypes.DELETE_AUTHOR_OPTIMISTIC,author};	
};

const loadAuthors = () => {
  return (dispatch) => {
    dispatch(apiCallBegin());
    return authorApi.getAuthors()
      .then( authors =>	dispatch(loadAuthorsSuccess(authors)))
      .catch( error => { 
        dispatch(apiCallFails(error));
        throw error;
      });
  };	
};

export const saveAuthor = (author) => {
  return (dispatch) => {
    dispatch(apiCallBegin());
    return authorApi.saveAuthor(author)
      .then( savedAuthor => author.id 
        ? dispatch(updateAuthorSuccess(savedAuthor)) 
        : dispatch(createAuthorSuccess(savedAuthor))
      )
      .catch( error => {        
        dispatch(apiCallFails(error));
        throw error;
      });
  };
};

export const deleteAuthor = (author) => {
  return (dispatch) => {
    dispatch(deleteAuthorSuccess(author));
    //not handling error
    return authorApi.deleteAuthor(author.id);
  };
};

export { loadAuthorsSuccess, loadAuthors};
