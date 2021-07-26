const express = require('express');
const router = express.Router();

const carro = [];

carro.push(41654);

 
router.get('/:id', function(req, res) {
    res.status(200).send(JSON.stringify(carro));
});

router.post('/create', function(req,res){
    carro.push(req.body);
    res.status(200).send('sucess');
})

module.exports = router;