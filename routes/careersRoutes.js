const express = require("express");
const router = express.Router();
const careersController = require("../controller/careersController");

// 라우터 ejs의 주소와 연결
router.get("/", careersController.getAllList);
router.get("/ca/girllist", careersController.getgirlList);
router.get("/ca/agelist", careersController.getageList);
router.get("/ca/actorlist", careersController.getactorList);
router.get("/ca/hanalist", careersController.gethanaList);

module.exports = router;
