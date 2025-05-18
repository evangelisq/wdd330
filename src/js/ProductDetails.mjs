export default class ProductList {
    constructor(products = []) {
        this.products = products;
    }

    addProduct(product) {
        this.products.push(product);
    }

    removeProduct(productId) {
        this.products = this.products.filter(p => p.id !== productId);
    }

    getAllProducts() {
        return this.products;
    }

    findProductById(productId) {
        return this.products.find(p => p.id === productId);
    }
}