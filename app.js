const express = require('express');
const app = express();
const cors = require('cors');
const bodyparser = require('body-parser');
const router = require("./src/routes/carro-route");

bodyparser.urlencoded();
app.use(cors());
app.use(router);
// app.use((req, res, next) => {
//     res.status(200).send({
//         mensagem: 'Ok, deu certo'
//     });
// });

module.exports = app;