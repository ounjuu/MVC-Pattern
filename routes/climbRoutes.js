const express = require("express");
const router = express.Router();
const climbController = require("../controller/climbController");

// 라우터 ejs의 주소와 연결
router.get("/", climbController.getallClimbList);
router.get("/climbprice", climbController.getclimbPriceList);
router.get("/climbtype", climbController.getclimbtypeList);
router.get("/climbdia", climbController.getclimbdia);
router.get("/climbchalk", climbController.getclimbchalk);

module.exports = router;
