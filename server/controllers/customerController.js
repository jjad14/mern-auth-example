const Customer = require('../models/customerModel');

// POST api/customer
// Register a Customer
// Private Access
const registerCustomer = async (req, res) => {
    const { name } = req.body;

    try {
        const newCustomer = new Customer({
            name
        });

        const savedCustomer = await newCustomer.save();
        
        res.json(savedCustomer);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
};

// GET api/customer
// Register a Customer
// Private Access
const getCustomers = async (req, res) => {
    try {
        const customers = await Customer.find();

        res.json(customers);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
};

module.exports = {
    registerCustomer,
    getCustomers
};

