import axios from 'axios';
import process from 'process'

const params = {
  headers: {
    Authorization: 'bearer ' + process.env.REACT_APP_STRIPE_API_KEY,
  },
};

export const fetchApiData = async (url) => {
  try {
    const { data } = await axios.get(process.env.REACT_APP_URL + url, params);
    return data;
  } catch (error) {
    console.error(error);
    return error;
  }
};
  