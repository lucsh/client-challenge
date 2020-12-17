import axiosRetry from 'axios-retry';
import { v4 as uuid } from 'uuid';
import server from './server';
import config from '../config';

axiosRetry(server, { retries: config.apiRetries || Infinity });

export default name => {
  const encodedName = encodeURIComponent(name);
  return server({
    method: 'PUT',
    url: `/${encodedName}`,
    headers: {
      'x-idempotence-key': uuid(),
    },
  });
};
