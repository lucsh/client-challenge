import axios from 'axios';
import config from '../config';

export default axios.create({
  baseURL: `${config.apiURL}`,
  timeout: 2000,
});
