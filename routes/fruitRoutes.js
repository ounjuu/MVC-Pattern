const express = require("express");
const router = express.Router();
const fruitController = require("../controller/fruitController");

// 라우터 ejs의 주소와 연결
router.get("/", fruitController.getfruitList);
router.get("/fruittaste", fruitController.getfruittaste);
router.get("/fruitlength", fruitController.getfruitlength);
router.get("/fruitcolor", fruitController.getfruitcolor);
router.get("/fruitname", fruitController.getfruitname);

module.exports = router;
