import axios from 'axios';

/**
 * @returns {Promise<axios.AxiosResponse<any>>}
 */
export function fetchCategories() {
    return axios.get('/api/categories');
}
