const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

// 라우팅 파일 불러오기
const careersRouters = require("./routes/careersRoutes");
const climbRouters = require("./routes/climbRoutes");
const foodRouters = require("./routes/foodRoutes");
const fruitRouters = require("./routes/fruitRoutes");
const webRouters = require("./routes/webRoutes");

app.use(express.urlencoded({ extended: true }));
// json 형식으로 받을 것임
app.use(express.json());
app.use("/public", express.static(path.join(__dirname, "public")));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// 라우터예시 /users 경로에 대한 라우팅 처리

app.use("/careers", careersRouters);
app.use("/climb", climbRouters);
app.use("/food", foodRouters);
app.use("/fruit", fruitRouters);
app.use("/webtoon", webRouters);

// set이 get 위에 와야 함
app.set("view engine", "ejs"); // ejs 파일 html로 변경해줌
app.set("views", "./views"); // ejs 파일 위치 설정

// post 요청은 req.body
app.get("/", (req, res) => {
  res.render("index");
});

app.get("*", (req, res) => {
  res.render("404");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
