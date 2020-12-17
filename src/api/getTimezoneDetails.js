import axiosRetry from 'axios-retry';
import server from './server';
import config from '../config';

axiosRetry(server, { retries: config.apiRetries || Infinity });

export default name => {
  const encodedName = encodeURIComponent(name);
  return server({
    method: 'GET',
    url: `/${encodedName}`,
  });
};
