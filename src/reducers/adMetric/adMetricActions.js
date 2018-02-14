import axios from 'axios';
import { BASE_URL } from '../../lib/config';
const {
  GET_AD_METRIC_REQUEST,
  GET_AD_METRIC_SUCCESS,
  GET_AD_METRIC_FAILURE,

  GET_AD_METRIC_COLUMN_NAMES_REQUEST,
  GET_AD_METRIC_COLUMN_NAMES_SUCCESS,
  GET_AD_METRIC_COLUMN_NAMES_FAILURE,
} = require('../../lib/constants').default;


export function getAdMetrics () {
  return async dispatch => {
    try {
      dispatch({ type: GET_AD_METRIC_REQUEST });
      dispatch({ type: GET_AD_METRIC_COLUMN_NAMES_REQUEST });

      const { column_names, rows } = (await axios.get(`${BASE_URL}/ads_metrics`)).data;
      console.log('getAdMetrics: ', column_names, rows);

      dispatch({ type: GET_AD_METRIC_SUCCESS, payload: rows });
      dispatch({ type: GET_AD_METRIC_COLUMN_NAMES_SUCCESS, payload: column_names });

    } catch (err) {
      dispatch({ type: GET_AD_METRIC_FAILURE, payload: `getAdMetric err ${err}`  });
      dispatch({ type: GET_AD_METRIC_COLUMN_NAMES_FAILURE, payload: `getAdMetric err ${err}`});
    }

  }
}