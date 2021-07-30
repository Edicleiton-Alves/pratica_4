const express = require('express');
const router = express.Router();
const controller = require("../controller/carro-controller");

router.get("/", controller.get);
//router.get("/brands/:marca", controller.getByMarca);
router.get("/:id", controller.getById);
router.post("/", controller.post);
router.put("/:id", controller.put);
router.delete("/:id", controller.delete);

module.exports = router;