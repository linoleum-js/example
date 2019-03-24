import {
  AUTHORIZE, SUCCESS, FAIL, RESTORE_PASSWORD
} from '../constants/constants'

const initialState = {
  error: false,
  restoreError: false,
  loading: false,
  authorized: false,
  passwordRestored: false
};

const userReducer = (state = initialState, action) => {
  switch(action.type) {
    case AUTHORIZE:
      return { ...initialState, loading: true };
    case RESTORE_PASSWORD:
      return { ...initialState, loading: true };
    case AUTHORIZE + SUCCESS:
      return { ...initialState, authorized: true };
    case AUTHORIZE + FAIL:
      return { ...initialState, error: true };
    case RESTORE_PASSWORD + SUCCESS:
      return { ...initialState, passwordRestored: true };
    case RESTORE_PASSWORD + FAIL:
      return { ...initialState, restoreError: true };
  }
  return state;
};

export default userReducer;