const careers = [
  {
    id: 1,
    userName: "김덕배",
    age: 25,
    careers: "배우",
    gender: "남자",
  },
  {
    id: 2,
    userName: "이철수",
    age: 30,
    careers: "감독",
    gender: "남자",
  },
  {
    id: 3,
    userName: "박영희",
    age: 28,
    careers: "작가",
    gender: "여자",
  },
  {
    id: 4,
    userName: "정하나",
    age: 35,
    careers: "프로듀서",
    gender: "여자",
  },
];
// 전체 리스트 띄우기
const allCareerList = () => {
  return careers;
};
// 성별이 여자인 사람 띄우기
const girlList = () => {
  return careers.filter((career) => career.gender === "여자");
};
// 나이가 30살 미만인 사람 띄우기
const ageList = () => {
  return careers.filter((career) => career.age < 30);
};
// 커리어가 배우인 사람 띄우기
const actorList = () => {
  return careers.filter((career) => career.careers === "배우");
};
// 이름이 정하나인 사람 띄우기
const hanaList = () => {
  return careers.filter((career) => career.userName === "정하나");
};

module.exports = {
  allCareerList,
  girlList,
  ageList,
  actorList,
  hanaList,
};
