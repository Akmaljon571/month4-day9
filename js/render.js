import newNode from "./newNode.js";

export default function (tbody, data) {
    let newFragment = document.createDocumentFragment()
    data.forEach((user, index) => {
          let newTr = newNode(user, index + 1)
          newFragment.append(newTr)
    });
    tbody.innerHTML = ''
    tbody.prepend(newFragment)
}