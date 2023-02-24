import axios from 'axios';

axios.defaults.baseURL = 'http://15.165.97.5/api';

const request = async (config) => {
  try {
    const response = await axios({
      ...config,
      headers: {
        ContentType: 'application/json',
        // ContentSecurityPolicy: 'upgrade-insecure-requests',
      },
    });
    return response.data;
  } catch (error) {
    return error;
  }
};

export default request;
