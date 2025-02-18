const fruitModel = require("../models/fruitModel");

// 전체 리스트 띄우기
const getfruitList = (req, res) => {
  const fruitList = fruitModel.allfruitList();
  res.render("fruit/index", { fruitList });
};

// taste가 달콤함인 것 찾기
const getfruittaste = (req, res) => {
  const tastefruit = fruitModel.fruittaste();
  if (tastefruit) {
    res.render("fruit/showtastefruit", { tastefruit });
  } else {
    res.status(404).send("해당하는 아이템이 없습니다.");
  }
};

// 이름이 세글자 인 것 찾기
const getfruitlength = (req, res) => {
  const fruitlen = fruitModel.fruitlength();
  if (fruitlen) {
    res.render("fruit/showfruitlen", { fruitlen });
  } else {
    res.status(404).send("해당하는 아이템이 없습니다.");
  }
};

// 색깔이 주황인 것 찾기
const getfruitcolor = (req, res) => {
  const colorfruit = fruitModel.fruitcolor();
  if (colorfruit) {
    res.render("fruit/showcolorfruit", { colorfruit });
  } else {
    res.status(404).send("해당하는 아이템이 없습니다.");
  }
};

// 이름이 사과인 것 찾기
const getfruitname = (req, res) => {
  const namefruit = fruitModel.fruitname();
  if (namefruit) {
    res.render("fruit/shownamefruit", { namefruit });
  } else {
    res.status(404).send("해당하는 아이템이 없습니다.");
  }
};

module.exports = {
  getfruitList,
  getfruittaste,
  getfruitlength,
  getfruitcolor,
  getfruitname,
};
