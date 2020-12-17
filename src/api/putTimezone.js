import axiosRetry from 'axios-retry';
import { v4 as uuid } from 'uuid';
import api from './api';
import config from '../config';

axiosRetry(api, { retries: config.apiRetries || Infinity });

/**
 * PUT a timezone.
 * @param {string} [name] - Timezone name
 *
 */
export default name => {
  const encodedName = encodeURIComponent(name);
  return api({
    method: 'PUT',
    url: `/${encodedName}`,
    headers: {
      'x-idempotence-key': uuid(),
    },
  });
};
