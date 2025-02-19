const productModel = require("../models/productModel");

// 전체 리스트 띄우기
const getproductData = (req, res) => {
  const productData = productModel.allData();
  res.render("product/index", { productData });
};
//2.유저중 Bob의 orders,payments,reviews 출력
const getbobdata = (req, res) => {
  const bobdata = productModel.bob();
  if (bobdata) {
    res.render("product/showbobdata", { bobdata });
  } else {
    res.status(404).send("해당하는 아이템이 없습니다.");
  }
};

//3. 가장 비싼걸 산 유저의 모든 데이터와 ,해당 주문 내역, 카테고리 출력
const getmostExpensive = (req, res) => {
  const mostExpensive = productModel.findmostExpensive();
  if (mostExpensive) {
    res.render("product/showmostExpensive", { mostExpensive });
  } else {
    res.status(404).send("해당하는 아이템이 없습니다.");
  }
};
module.exports = { getproductData, getbobdata, getmostExpensive };
