let cnt = 0;

const deleteEntry = (idx) => {
  const data = document.querySelector(".showData");
  if (data.id === `show${idx}`) {
    data.innerHTML = "";
  }
  document.getElementById(`par${idx}`).style.display = "none";
};

const showEmp = (idx) => {
  console.log(idx);
  const dispData = document.querySelector(".showData");
  const title = document.getElementById(`title${idx}`);
  const info = document.getElementById(`info${idx}`);

  console.log(title);
  console.log(info);
  dispData.innerText = title.innerText + info.innerText;

  dispData.id = `show${idx}`;
};

function saveData(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const roll = document.getElementById("roll").value;
  const phone = document.getElementById("phone").value;

  const par = document.createElement("div");
  const title = document.createElement("div");
  const info = document.createElement("div");
  const btn = document.createElement("button");

  btn.innerText = "❌";

  let idx = cnt;

  par.id = `par${idx}`;
  title.id = `title${idx}`;
  info.id = `info${idx}`;
  par.classList = "parent";

  title.addEventListener("click", () => {
    showEmp(idx);
  });

  btn.addEventListener("click", () => {
    deleteEntry(idx);
  });

  cnt++;
  title.innerHTML = name;
  info.innerHTML = ` ${roll}  ${phone} `;
  info.style.display = "none";

  par.append(title);
  par.append(info);
  par.append(btn);

  const parent = document.getElementById("leftDiv");
  parent.appendChild(par);

  document.getElementById("frm").reset();
}
