import { postItem } from "./postItem.js";
import { patch } from "./patch.js";
import { deleteEl } from "./delete.js";

export function CreateLi(name, arrayObj) {
  const ul = document.querySelector(".ul_todo");
  const li = document.createElement("li");
  const p = document.createElement("p");
  const buttons = document.createElement("div");
  const buttonDone = document.createElement("button");
  const buttonDelet = document.createElement("button");
  const input = document.querySelector(".input");
  let status = false;

  li.className = "li_todo";
  li.style.backgroundColor = "#6C8CD5";
  p.className = "text_li";
  buttons.className = "buttons_li";
  buttonDone.className = "buttonDone_li";
  buttonDelet.className = "buttonDelet_li";

  p.textContent = input.value;
  buttonDone.textContent = "Отметить";
  buttonDelet.textContent = "Удалить";

  postItem(p.textContent, name, false);
  let index = arrayObj.length - 1;

  buttons.append(buttonDone);
  buttons.append(buttonDelet);
  li.append(p);
  li.append(buttons);

  buttonDone.addEventListener("click", (e) => {
    e.preventDefault();
    if (buttonDone.textContent == "Отметить") {
      buttonDone.textContent = "Отмена";
      li.style.backgroundColor = "#67E667";
      status = true;
    } else if (buttonDone.textContent == "Отмена") {
      buttonDone.textContent = "Отметить";
      li.style.backgroundColor = "#6C8CD5";
      status = false;
    }
    patch(index.id, status);
    input.value = "";
  });

  buttonDelet.addEventListener("click", (e) => {
    e.preventDefault();
    if (confirm("Вы точно хотите удалить дело?")) {
      li.remove(EventTarget);
      deleteEl(index.id);
    }
  });

  ul.append(li);
}
