import axios from 'axios';
import { GIPHY_SEARCH_LIMIT } from '../constants';

export const search = async (query: string, page: number) => {
  const { GIPHY_API_KEY } = process.env;

  const limit = GIPHY_SEARCH_LIMIT;
  const offset = (page - 1) * limit;

  const response = await axios.get('https://api.giphy.com/v1/gifs/search', {
    params: { api_key: GIPHY_API_KEY, q: query, limit, offset }
  });

  const { data, pagination } = response.data;

  return { data, pagination };
};
