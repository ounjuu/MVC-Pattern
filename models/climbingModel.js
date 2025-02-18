const climbingGear = [
  {
    id: 1,
    name: "클라이밍 슈즈",
    brand: "라스포르티바",
    type: "신발",
    price: 150000,
  },
  {
    id: 2,
    name: "하네스",
    brand: "블랙다이아몬드",
    type: "안전 장비",
    price: 100000,
  },
  {
    id: 3,
    name: "초크백",
    brand: "페츨",
    type: "악세서리",
    price: 30000,
  },
  {
    id: 4,
    name: "카라비너",
    brand: "메트리우스",
    type: "안전 장비",
    price: 25000,
  },
];

// 전체 리스트 띄우기
const allClimbList = () => {
  return climbingGear;
};
// 가격이 30000원 이상인 장비 띄우기
const climbPriceList = () => {
  return climbingGear.filter((climb) => climb.price >= 30000);
};

// 타입이 안전 장비인 것 띄우기
const climbtypeList = () => {
  return climbingGear.filter((climb) => climb.type === "안전 장비");
};

// 브랜드가 블랙다이아몬드인 것 가져오기
const climbdia = () => {
  return climbingGear.filter((climb) => climb.brand === "블랙다이아몬드");
};

// 이름이 쵸크백인 것 가져오기
const climbchalk = () => {
  return climbingGear.filter((climb) => climb.name === "초크백");
};

module.exports = {
  allClimbList,
  climbPriceList,
  climbtypeList,
  climbdia,
  climbchalk,
};
