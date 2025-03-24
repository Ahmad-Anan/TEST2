
export function getPrerenderParams() {
    return {
        'productDetails/:productId': [{ productId: '123' }, { productId: '456' }],
        'checkout/:cart_id': [{ cart_id: '789' }]
    };
}