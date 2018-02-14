import axios from 'axios';
import { BASE_URL } from '../../lib/config';
const {
  GET_AD_REQUEST,
  GET_AD_SUCCESS,
  GET_AD_FAILURE,
  GET_AD_COLUMN_NAMES_REQUEST,
  GET_AD_COLUMN_NAMES_SUCCESS,
  GET_AD_COLUMN_NAMES_FAILURE,
} = require('../../lib/constants').default;


export function getAds () {
  return async dispatch => {
    try {
      dispatch({ type: GET_AD_REQUEST });
      dispatch({ type: GET_AD_COLUMN_NAMES_REQUEST });
      const { ads } = (await axios.get(`${BASE_URL}/ads`)).data;
      console.log('getAds: ', ads);
      if(ads && ads.length) dispatch({ type: GET_AD_COLUMN_NAMES_SUCCESS, payload: Object.keys(ads[0]) });
      dispatch({ type: GET_AD_SUCCESS, payload: ads });
    } catch (err) {
      dispatch({ type: GET_AD_FAILURE, payload: `getAd err ${err}`  });
      dispatch({ type: GET_AD_COLUMN_NAMES_FAILURE, payload: `getAd err ${err}`  });
    }

  }
}