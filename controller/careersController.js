const careersModel = require("../models/careersModel");

// 전체 리스트 띄우기
const getAllList = (req, res) => {
  const allActor = careersModel.allCareerList();
  res.render("careers/index", { allActor });
};

// 성별이 여자인 사람 띄우기
const getgirlList = (req, res) => {
  const girlList = careersModel.girlList();
  if (girlList) {
    res.render("careers/showgirllist", { girlList });
  } else {
    res.status(404).send("해당하는 아이템이 없습니다.");
  }
};

// 나이가 30살 미만인 사람 띄우기
const getageList = (req, res) => {
  const ageList = careersModel.ageList();
  if (ageList) {
    res.render("careers/showageList", { ageList });
  } else {
    res.status(404).send("해당하는 아이템이 없습니다.");
  }
};
// 커리어가 배우인 사람 띄우기
const getactorList = (req, res) => {
  const actorList = careersModel.actorList();
  if (actorList) {
    res.render("careers/showactorList", { actorList });
  } else {
    res.status(404).send("해당하는 아이템이 없습니다.");
  }
};
// 이름이 정하나인 사람 띄우기
const gethanaList = (req, res) => {
  const hanaList = careersModel.hanaList();
  if (hanaList) {
    res.render("careers/showhanaList", { hanaList });
  } else {
    res.status(404).send("해당하는 아이템이 없습니다.");
  }
};

module.exports = {
  getAllList,
  getgirlList,
  getageList,
  getactorList,
  gethanaList,
};
