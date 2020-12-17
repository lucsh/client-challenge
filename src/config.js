const { REACT_APP_API_URL, REACT_APP_API_RETRYS, REACT_APP_REFRESH_INTERVAL } = process.env;

const config = {
  apiURL: REACT_APP_API_URL,
  apiRetries: REACT_APP_API_RETRYS || 3,
  refreshInterval: REACT_APP_REFRESH_INTERVAL || 300,
};

module.exports = config;
