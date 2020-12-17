import axios from 'axios';
import config from '../config';

/**
 * API axios instance.
 *
 */
export default axios.create({ baseURL: `${config.apiURL}` });
