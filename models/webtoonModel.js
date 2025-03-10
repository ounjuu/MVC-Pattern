const webtoons = [
  {
    id: 1,
    title: "신의탑",
    author: "SIU",
    genre: "판타지",
    episodes: 500,
  },
  {
    id: 2,
    title: "여신강림",
    author: "야옹이",
    genre: "로맨스",
    episodes: 250,
  },
  {
    id: 3,
    title: "외모지상주의",
    author: "박태준",
    genre: "드라마",
    episodes: 400,
  },
  {
    id: 4,
    title: "헬퍼",
    author: "삭",
    genre: "액션",
    episodes: 200,
  },
];
// 전체 리스트 띄우기
const allwebtoonList = () => {
  return webtoons;
};
// 제목이 네글자 이상인 것 찾기
const titlelength = () => {
  return webtoons.filter((toons) => toons.title.length >= 4);
};
// 에피소드가 300 이상인 것 찾기
const episodes = () => {
  return webtoons.filter((toons) => toons.episodes >= 300);
};
// 작가 삭인 것 찾기
const webauthorname = () => {
  return webtoons.filter((toons) => toons.author === "삭");
};

// 장르가 로맨스인 것 찾기
const webgenre = () => {
  return webtoons.filter((toons) => toons.genre === "로맨스");
};

module.exports = {
  allwebtoonList,
  titlelength,
  episodes,
  webauthorname,
  webgenre,
};
