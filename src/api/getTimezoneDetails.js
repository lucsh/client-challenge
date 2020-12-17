import axiosRetry from 'axios-retry';
import api from './api';
import config from '../config';

axiosRetry(api, { retries: config.apiRetries || Infinity });

/**
 * GET a timezone.
 * @param {string} [name] - Timezone name
 *
 */
export default name => {
  const encodedName = encodeURIComponent(name);
  return api({
    method: 'GET',
    url: `/${encodedName}`,
  });
};
