import axiosRetry from 'axios-retry';
import api from './api';
import config from '../config';

axiosRetry(api, { retries: config.apiRetries || Infinity });

export default () => {
  return api.get(`${config.apiURL}/`);
};
