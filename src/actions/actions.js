export const FAIL = 'FAIL';
export const SUCCESS = 'SUCCESS';
export const START = 'START';

export const AUTHORIZE = 'AUTHORIZE';

import { authorize } from '../services/api';

export const authorizeAction = (credensials) => {
  return dispatch => {
    dispatch({ type: UPDATE_TASK + START });

    authorize(credensials).then((data) => {
      dispatch({
        type: AUTHORIZE + SUCCESS,
        data
      })
    })
  };
};

