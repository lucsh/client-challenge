import axiosRetry from 'axios-retry';
import server from './server';
import config from '../config';

axiosRetry(server, { retries: config.apiRetries || Infinity });

export default () => {
  return server.get(`${config.apiURL}/`);
};
