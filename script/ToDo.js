import { CreateHeading } from "./CreateHeading.js";
import { CreateForm } from "./CreateForm.js";
import { CreateUl } from "./CreateUl.js";
import { CreateLi } from "./CreateLi.js";
import { CreateLocalUl } from "./CreateLocalUl.js";
import { postItem } from "./postItem.js";

export async function ToDo(heading_text, name) {
  const responce = await fetch("http://localhost:3000/api/todos");
  let arrayObj = (await responce.json()) || [];

  const conteiner = document.querySelector(".conteiner");
  const form = CreateForm().form;
  const input = CreateForm().input;
  const buttonAdd = CreateForm().buttonAdd;

  conteiner.append(CreateHeading(heading_text));
  conteiner.append(form);
  form.append(input);
  form.append(buttonAdd);
  conteiner.append(CreateUl());

  if (arrayObj.length == 0) {
    arrayObj = [
      { name: "Покормить Лешу", done: true },
      { name: "Найти Бабиджона", done: false },
      { name: "Встать через не можу", done: true },
    ];
    for (let index of arrayObj) {
      postItem(index.name, name, index.done);
    }
  }

  CreateLocalUl(name);

  setInterval(() => {
    if (input.value != "") {
      buttonAdd.removeAttribute("disabled");
    } else {
      buttonAdd.setAttribute("disabled", "disabled");
    }
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    CreateLi(name, arrayObj);
    input.value = "";
  });
}
