import axios from 'axios';

/**
 * @param {string|null} categoryIri
 * @returns {Promise<axios.AxiosResponse<any>>}
 */
export function fetchProducts(categoryIri) {
    const params = {};
    if (categoryIri) {
        params.category = categoryIri;
    }
    return axios.get('/api/products', {
        params,
    });
}
