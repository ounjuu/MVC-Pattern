const express = require("express");
const router = express.Router();
const productController = require("../controller/productController");

// 라우터 ejs의 주소와 연결
router.get("/", productController.getproductData);
router.get("/bobdata", productController.getbobdata);
router.get("/mostexpensive", productController.getmostExpensive);

module.exports = router;
