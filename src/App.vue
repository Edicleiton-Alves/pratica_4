<template>
  Id: <input type="text" name="" id="0" v-model="id" /><br />
  Nome: <input type="text" name="" id="1" v-model="name" /><br />
  Marca: <input type="text" name="" id="2" v-model="brand" /><br />
  Ano de Fabricação: <input type="text" name="" id="3" v-model="fabricacao" /><br />
  Ano de Modelo: <input type="text" name="" id="4" v-model="model" /><br />
  Data de Venda: <input type="text" name="" id="5" v-model="dateSale" /><br />
  
  {{ carro }} <br />

  <button @click="postCar">Inserir Carro</button>
  <button @click="getCar">Buscar Carros</button>
  <button @click="buscarCar">Busca pelo Id</button>
  <button @click="putCar">Atualizar Carro</button>
  <button @click="deleteCar">Deletar</button>

  <ul>
    <li v-for="carro in carros" :key="carro.id">
      Id: {{carro.id}}<br />
      Nome: {{carro.name}}<br />
      Marca: {{carro.brand}}<br />
      Ano de Fabricação: {{carro.fabricacao}}<br />
      Ano de Modelo:{{carro.model}}<br />
      Data de Venda:{{carro.dateSale}}<br />
    </li>
  </ul>
</template>

<script>
import axios from "axios";

export default{
  name: "app",
  data(){
    return{
    id: "",
    name: "",
    marca: "",
    fabricacao: "",
    model: "",
    dataVenda: "",
    carros: [],
    carro: "",
    baseURI: "http://localhost:3000/",
    };
  },
  methods: {
    getCar: function(){
      axios.get(this.baseURI).then((result) =>{
        console.log(result);
        this.carros = result.data;
      });
    },
    buscarCar: function(){
      axios.get(this.baseURI + "/" + this.id).then((result) =>{
        console.log(result);
        this.posts = result.data;
      });
    },
    postCar: function(){
      axios.post(this.baseURI,{
        name: this.name,
        marca: this.brand,
        fabricacao: this.fabricacao,
        model: this.model,
        dataVenda: this.dateSale,
      })
      .then((result) =>{
        console.log(result);
      });
    },
    putCar: function(){
      axios.put(this.baseURI + "/" + this.id, {
        name: this.name,
        marca: this.brand,
        fabricacao: this.fabricacao,
        model: this.model,
        dataVenda: this.dateSale,
      })
      .then((result) =>{
        console.log(result);
        this.posts = result.data;   
      });
    },
    deleteCar: function() {
      axios.delete(this.baseURI + "/" + this.id).then((result) =>{
        console.log(result);
      });
    },
  },
};
</script>

<style>

</style>
