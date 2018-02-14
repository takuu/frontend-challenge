import { combineReducers } from 'redux';
import ads from './ad/adReducer';
import adMetrics from './adMetric/adMetricReducer';
import settings from './settings/settingsReducer';

const rootReducer = combineReducers({
  ads,
  adMetrics,
  settings,
});

export default rootReducer;