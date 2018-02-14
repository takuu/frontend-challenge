const {
  GET_AD_REQUEST,
  GET_AD_SUCCESS,
  GET_AD_FAILURE,
} = require('../../lib/constants').default;

export default (state = [], action) => {
  switch(action.type) {
    case GET_AD_REQUEST:
    case GET_AD_FAILURE:
      break;
    case GET_AD_SUCCESS:
      if (!action.payload) { return state }
      return action.payload;

  }
  return state;
}