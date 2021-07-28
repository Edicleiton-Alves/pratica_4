class CarroService {
    constructor() {
      this.carros = [];
      this.id = 0;
      this.name = "";
      this.brand = "";
      this.model = 0;
      this.fabricacao = 0;
      this.dateSale = "";
    }
  
    add(carro) {
      this.id++;
      carro.id = this.id;
      carro.name = this.name;
      carro.brand = this.brand;
      carro.model = this.model;
      carro.fabricacao = this.fabricacao;
      carro.dateSale = this.dateSale;
      this.carros.push(carro);
    }
  
    getAll() {
      return this.carros;
    }
  
    getById(id) {
      return this.carros.find((carro) => carro.id == id);
    }
  
    update(id, carro) {
      this.carros.forEach(function (e) {
        if (id && id == e.id) {
          for (var i in carro) {
            e[i] = carro[i];
          }
        }
      });
    }
  
    delete(id) {
      this.carros = this.carros.filter(function (el) {
        return el.id != id;
      });
    }
  }
  
  module.exports = CarroService;