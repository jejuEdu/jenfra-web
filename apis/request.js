import axios from 'axios';

//axios.defaults.baseURL = 'https://15.165.97.5/api';
axios.defaults.baseURL = 'https://back.jenfra.shop/api';

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
