const climbingModel = require("../models/climbingModel");

// 전체 리스트 띄우기
const getallClimbList = (req, res) => {
  const climbList = climbingModel.allClimbList();
  res.render("climb/index", { climbList });
};

// 가격
const getclimbPriceList = (req, res) => {
  const priceList = climbingModel.climbPriceList();
  if (priceList) {
    res.render("climb/showpriceList", { priceList });
  } else {
    res.status(404).send("해당하는 아이템이 없습니다.");
  }
};

const getclimbtypeList = (req, res) => {
  const typeList = climbingModel.climbtypeList();
  if (typeList) {
    res.render("climb/showtypeList", { typeList });
  } else {
    res.status(404).send("해당하는 아이템이 없습니다.");
  }
};

const getclimbdia = (req, res) => {
  const dia = climbingModel.climbdia();
  if (dia) {
    res.render("climb/showdia", { dia });
  } else {
    res.status(404).send("해당하는 아이템이 없습니다.");
  }
};
const getclimbchalk = (req, res) => {
  const chalk = climbingModel.climbchalk();
  if (chalk) {
    res.render("climb/showchalk", { chalk });
  } else {
    res.status(404).send("해당하는 아이템이 없습니다.");
  }
};

module.exports = {
  getallClimbList,
  getclimbPriceList,
  getclimbtypeList,
  getclimbdia,
  getclimbchalk,
};
