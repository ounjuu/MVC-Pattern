const foodModel = require("../models/foodModel");

// 전체 리스트 띄우기
const getallfoodList = (req, res) => {
  const foodList = foodModel.allfoodList();
  res.render("food/index", { foodList });
};

const getcaloriesList = (req, res) => {
  const calories = foodModel.caloriesList();
  if (calories) {
    res.render("food/showcalories", { calories });
  } else {
    res.status(404).send("해당하는 아이템이 없습니다.");
  }
};

const getoriginfood = (req, res) => {
  const origin = foodModel.originfood();
  if (origin) {
    res.render("food/showorigin", { origin });
  } else {
    res.status(404).send("해당하는 아이템이 없습니다.");
  }
};
const getfoodname = (req, res) => {
  const foodName = foodModel.foodname();
  if (foodName) {
    res.render("food/showfoodname", { foodName });
  } else {
    res.status(404).send("해당하는 아이템이 없습니다.");
  }
};
const getfoodtype = (req, res) => {
  const typefood = foodModel.foodtype();
  if (typefood) {
    res.render("food/showtypefood", { typefood });
  } else {
    res.status(404).send("해당하는 아이템이 없습니다.");
  }
};

module.exports = {
  getallfoodList,
  getcaloriesList,
  getoriginfood,
  getfoodname,
  getfoodtype,
};
