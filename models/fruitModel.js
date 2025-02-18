const fruits = [
  {
    id: 1,
    name: "사과",
    color: "빨강",
    taste: "달콤함",
  },
  {
    id: 2,
    name: "바나나",
    color: "노랑",
    taste: "달콤함",
  },
  {
    id: 3,
    name: "포도",
    color: "보라",
    taste: "새콤달콤함",
  },
  {
    id: 4,
    name: "오렌지",
    color: "주황",
    taste: "상큼함",
  },
];
// 전체 리스트 띄우기
const allfruitList = () => {
  return fruits;
};
// taste가 달콤함인 것 찾기
const fruittaste = () => {
  return fruits.filter((fruit) => fruit.taste === "달콤함");
};
// 이름이 세글자 인 것 찾기
const fruitlength = () => {
  return fruits.filter((fruit) => fruit.name.length >= 3);
};
// 색깔이 주황인 것 찾기
const fruitcolor = () => {
  return fruits.filter((fruit) => fruit.color === "주황");
};
// 이름이 사과인 것 찾기
const fruitname = () => {
  return fruits.filter((fruit) => fruit.name === "사과");
};
module.exports = {
  allfruitList,
  fruittaste,
  fruitlength,
  fruitcolor,
  fruitname,
};
