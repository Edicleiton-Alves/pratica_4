const Carro = require("../model/carro");
const CarroService = require("../services/car-service");
var carroService = new CarroService();

exports.get = (req, res) => {
  res.json(carroService.getAll());
};

exports.getById = (req, res) => {
  res.json(carroService.getById(req.params.id));
};

exports.post = (req, res) => {
  // res.send(req.data.name);
  res.json(carroService.add(new Carro(req.body.name, req.body.brand, req.body.model, req.body.fabricacao, req.body.dateSale)));
};

exports.put = (req, res) => {
  res.json(
    carroService.update(
      req.params.id,
      new Carro(req.body.name, req.body.brand, req.body.model, req.body.fabricacao, req.body.dateSale)
    )
  );
};

exports.delete = (req, res) => {
  res.json(carroService.delete(req.params.id));
};