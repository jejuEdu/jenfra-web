import axios from 'axios';

axios.defaults.baseURL = 'http://3.89.74.140/api';

const request = async (config) => {
  try {
    const response = await axios({
      ...config,
      headers: {
        ContentType: 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    return error;
  }
};

export default request;
