const {
  GET_AD_METRIC_REQUEST,
  GET_AD_METRIC_SUCCESS,
  GET_AD_METRIC_FAILURE,
} = require('../../lib/constants').default

export default (state = [], action) => {
  switch(action.type) {
    case GET_AD_METRIC_REQUEST:
    case GET_AD_METRIC_FAILURE:
      break;
    case GET_AD_METRIC_SUCCESS:
      if (!action.payload) { return state }
      return action.payload;
  }
  return state;
}