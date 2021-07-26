const express = require('express');
const router = express.Router();

const carro = [];

carro.push(41654);

 
router.get('/', function(req, res) {
    res.status(200).send(JSON.stringify(carro));
});

module.exports = router;