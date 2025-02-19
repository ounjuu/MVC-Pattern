const divWrap = document.querySelector(".divWrap");
divWrap.innerHTML = `
    <div>작성자<input type="text" class="name"/></div>
    <div>내용<input type="text" class="content"/></div>
    <div><button onclick="clickbtn()">작성</button></div>`;

const tbody = document.querySelector(".tbody");

let num = 0;
let date = new Date().toLocaleDateString().slice(0, -1);
let tabletext;
const clickbtn = () => {
  num++;
  const inputtext1 = document.querySelector(".name").value;
  const inputtext2 = document.querySelector(".content").value;
  const tabletext = document.createElement("tr");
  tabletext.innerHTML = `
  <td>${num}</td>
  <td>${inputtext1}</td>
  <td>${inputtext2}</td>
  <td>${date}</td>
  `;

  tbody.appendChild(tabletext);

  document.querySelector(".name").value = "";
  document.querySelector(".content").value = "";
};
