import {
  AUTHORIZE, SUCCESS
} from '../actions/actions'

const userReducer = (state = { authorized: false }, action) => {
  switch(action.type) {
    case AUTHORIZE + SUCCESS:
      return { authorized: true };
  }
  return state;
};

export default userReducer;