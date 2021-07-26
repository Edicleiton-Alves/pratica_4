const express = require('express');
const app = express();
const router = require("./src/routes/carro-route");

app.use(router);
// app.use((req, res, next) => {
//     res.status(200).send({
//         mensagem: 'Ok, deu certo'
//     });
// });

module.exports = app;