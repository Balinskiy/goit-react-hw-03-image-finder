import axios from 'axios';

const API_KEY = '40315743-946dc4202327f4239c0c67201';
axios.defaults.baseURL = 'https://pixabay.com/api/';
axios.defaults.headers.common['Authorization'] = API_KEY;
axios.defaults.params = {
  orientation: 'horizontal',
  per_page: 12,
};

export const getImages = async (query, page, photo) => {
  try {
    const { data } = await axios.get(`
  ?q=${query}&page=${page}image_type=${photo}`);
    return data;
  } catch (error) {
    return error;
  }
};
