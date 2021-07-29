const Carro = require("../model/carro");
const CarroService = require("../services/car-service");
var carroService = new CarroService();

exports.get = (req, res) => {
  res.json(carroService.getAll());
};

exports.getById = (req, res) => {
  res.json(carroService.getById(req.params.id));
};

exports.post = (  req, res) => {
  res.json(carroService.add(new Carro(req.body.name, req.body.marca, req.body.model, req.body.fabricacao, req.body.dataVenda)));
};

exports.put = (req, res) => {
  res.json(
    carroService.update(
      req.params.id,
      new Carro(req.body.name, req.body.marca, req.body.model, req.body.fabricacao, req.body.dataVenda)
    )
  );
};

exports.getByMarca = (req, res) => {
  res.json(carroService.getByMarca(req.query.marca));
  };
  

exports.delete = (req, res) => {
  res.json(carroService.delete(req.params.id));
};