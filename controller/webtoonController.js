const webtoonModel = require("../models/webtoonModel");

// 전체 리스트 띄우기
const getwebtoonlist = (req, res) => {
  const webtoonlist = webtoonModel.allwebtoonList();
  res.render("webtoon/index", { webtoonlist });
};

const getwebtitlelength = (req, res) => {
  const weblength = webtoonModel.titlelength();
  if (weblength) {
    res.render("webtoon/showweblength", { weblength });
  } else {
    res.status(404).send("해당하는 아이템이 없습니다.");
  }
};

const getepisodes = (req, res) => {
  const webepisodes = webtoonModel.episodes();
  if (webepisodes) {
    res.render("webtoon/showwebepisodes", { webepisodes });
  } else {
    res.status(404).send("해당하는 아이템이 없습니다.");
  }
};
const getwebauthorname = (req, res) => {
  const authorname = webtoonModel.webauthorname();
  if (authorname) {
    res.render("webtoon/showauthorname", { authorname });
  } else {
    res.status(404).send("해당하는 아이템이 없습니다.");
  }
};

const getwebgenre = (req, res) => {
  const webtoongenre = webtoonModel.webgenre();
  if (webtoongenre) {
    res.render("webtoon/showwebtoongenre", { webtoongenre });
  } else {
    res.status(404).send("해당하는 아이템이 없습니다.");
  }
};

module.exports = {
  getwebtoonlist,
  getwebtitlelength,
  getepisodes,
  getwebauthorname,
  getwebgenre,
};
