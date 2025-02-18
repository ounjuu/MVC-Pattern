const foods = [
  {
    id: 1,
    name: "김치찌개",
    origin: "한국",
    type: "찌개",
    calories: 300,
  },
  {
    id: 2,
    name: "스파게티 카르보나라",
    origin: "이탈리아",
    type: "파스타",
    calories: 600,
  },
  {
    id: 3,
    name: "타코",
    origin: "멕시코",
    type: "스트리트 푸드",
    calories: 350,
  },
  {
    id: 4,
    name: "초밥",
    origin: "일본",
    type: "해산물 요리",
    calories: 250,
  },
];

// 전체 리스트 띄우기
const allfoodList = () => {
  return foods;
};
// 칼로리가 300 이하인 것 띄우기
const caloriesList = () => {
  return foods.filter((food) => food.calories <= 300);
};
// origin이 한국인 것 띄우기
const originfood = () => {
  return foods.filter((food) => food.origin === "한국");
};
// 이름이 타코인 것 가져오기
const foodname = () => {
  return foods.filter((food) => food.name === "타코");
};
// type이 파스타인 것 가져오기
const foodtype = () => {
  return foods.filter((food) => food.type === "파스타");
};
module.exports = { allfoodList, caloriesList, originfood, foodname, foodtype };
