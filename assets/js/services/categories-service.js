/**
 * @returns {Promise<unknown>}
 */
export function fetchCategories() {
    return new Promise((resolve, reject) => {
        resolve({
            data: {
                'hydra:member': window.categories,
            },
        });
    });
}
