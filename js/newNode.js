export default function ({ UserIsmi, UserFam, UserGuruh, UserJinsi }, sana) {
  let copy = document.getElementById("template");
  let newTemplate = copy.content.cloneNode("true");

  newTemplate.querySelector(".son").textContent = sana;
  newTemplate.querySelector(".ism").textContent = UserIsmi;
  newTemplate.querySelector(".fam").textContent = UserFam;
  newTemplate.querySelector(".gr").textContent = UserGuruh;
  newTemplate.querySelector(".gender").textContent = UserJinsi;

  return newTemplate;
}
