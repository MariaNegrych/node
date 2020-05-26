module.exports = (req, res, next) => {
    try {
        const {id, name, power, price, year} = req.body;

        if (!id || !name || !power || !price || !year) {
            throw new Error('Product is not valid!');
        }

        next();

    } catch (e) {
        res.end('Product is not valid!', {message: e.message});
    }
};
