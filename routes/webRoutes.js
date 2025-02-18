const express = require("express");
const router = express.Router();
const webController = require("../controller/webtoonController");

// 라우터 ejs의 주소와 연결
router.get("/", webController.getwebtoonlist);
router.get("/webtitlelen", webController.getwebtitlelength);
router.get("/webepisodes", webController.getepisodes);
router.get("/webauthorname", webController.getwebauthorname);
router.get("/webgenre", webController.getwebgenre);

module.exports = router;
