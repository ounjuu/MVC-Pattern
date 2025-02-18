const express = require("express");
const router = express.Router();
const foodController = require("../controller/foodController");

// 라우터 ejs의 주소와 연결
router.get("/", foodController.getallfoodList);
router.get("/calories", foodController.getcaloriesList);
router.get("/originfood", foodController.getoriginfood);
router.get("/foodname", foodController.getfoodname);
router.get("/foodtype", foodController.getfoodtype);

module.exports = router;
