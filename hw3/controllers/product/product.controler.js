const {productService} = require('../../service');

module.exports = {

    createProduct: (req, res) => {
        const {id, name, power, price, year} = req.body;

        productService.createProduct(id, name, power, price, year);

        res.json(req.body);
    },

    getProduct: (req, res) => {
        const {idOfProduct} = req.params;
        const car = productService.getProduct(+idOfProduct);

        res.json(car);
    },

    getAllProducts: (req, res) => {
        const cars = productService.getAllProducts();

        res.json(cars);
    },

    updateProduct: (req, res) => {
        const {idOfProduct} = req.params;
        const {id, name, power, price, year} = req.body;

        productService.updateProduct(+idOfProduct, id, name, power, price, year);

        res.json(req.body);
    },

    deleteProduct: (req, res) => {
        const {idOfProduct} = req.params;

        productService.deleteProduct(+idOfProduct);

        res.json();
    }

};
