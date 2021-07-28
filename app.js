const express = require('express');
const app = express();
const cors = require('cors');
const router = require("./src/routes/carro-route");
 
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", router);  
app.use((req, res, next) => {
    res.status(400).send({
        status: 400,
        error:"Not Found",
    });
});

module.exports = app;