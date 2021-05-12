const express = require('express');
const auth = require('../middleware/authMiddleware');
const { registerCustomer, getCustomers } = require('../controllers/customerController');


const router = express.Router();

router.route('/')
.post(auth, registerCustomer)
.get(auth, getCustomers);


module.exports = router;
