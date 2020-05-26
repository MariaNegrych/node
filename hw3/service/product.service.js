let {cars} = require('../database');

class ProductService {

    createProduct(id, name, power, price, year) {
        cars.push({id, name, power, price, year});
    }

    getProduct(id) {
        return cars.filter(car => car.id === id);
    }

    getAllProducts(){
        return cars;
    }

    updateProduct(currentId, updatedId, name, power, price, year) {
        const carId = cars.findIndex(car => car.id === currentId);

        if(carId === -1)
            return;

        cars[carId] = {...cars[carId], id: updatedId, name, power, price, year};
    }

    deleteProduct(id) {
        cars = cars.filter(car => car.id !== id);
    }
}

module.exports = new ProductService;
