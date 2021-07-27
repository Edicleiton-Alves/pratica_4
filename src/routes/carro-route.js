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

router.put('/update', function(req, res) {
    res.json(
        carro.put(req.body.name, req.body.brand, req.body.fabricacao, req.body.model, req.body.dateSale)

    //   productService.update(
    //     req.params.body,
    //     new Product(req.body.name, req.body.marca, req.body.model, req.body.dateSale, req.body.fabricacao)
    //   )
    );
  });

router.delete('/delete', function(req, res){

});

module.exports = router;