import _ from 'lodash';

const {
  GET_COLUMN_NAMES_REQUEST,
  GET_AD_COLUMN_NAMES_SUCCESS,
  GET_COLUMN_NAMES_FAILURE,

  GET_AD_METRIC_COLUMN_NAMES_REQUEST,
  GET_AD_METRIC_COLUMN_NAMES_SUCCESS,
  GET_AD_METRIC_COLUMN_NAMES_FAILURE,
} = require('../../lib/constants').default;

export default (state = [], action) => {
  switch(action.type) {

    case GET_AD_METRIC_COLUMN_NAMES_REQUEST:
    case GET_AD_METRIC_COLUMN_NAMES_FAILURE:
    case GET_COLUMN_NAMES_REQUEST:
    case GET_COLUMN_NAMES_FAILURE:
      break;
    case GET_AD_COLUMN_NAMES_SUCCESS:
    case GET_AD_METRIC_COLUMN_NAMES_SUCCESS:
      if (!action.payload) { return state }

      const merged = _.union(state, action.payload);
      console.log('merged: ', merged);

      return merged;

  }
  return state;
}