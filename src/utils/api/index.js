import products from './products.json';

export function fetchMockProducts() {
    return new Promise((resolve) => setTimeout(() => resolve(products), 1500));
}
