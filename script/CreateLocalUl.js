import { RewriteLocalArray } from "./RewriteLocalArray.js";

export function CreateLocalUl(arrayObj, name) {
  for (const index of arrayObj) {
    const ul = document.querySelector(".ul_todo");
    const li = document.createElement("li");
    const p = document.createElement("p");
    const buttons = document.createElement("div");
    const buttonDone = document.createElement("button");
    const buttonDelet = document.createElement("button");

    li.className = "li_todo";
    p.className = "text_li";
    buttons.className = "buttons_li";
    buttonDone.className = "buttonDone_li";
    buttonDelet.className = "buttonDelet_li";

    p.textContent = index.name;
    buttonDelet.textContent = "Удалить";

    buttons.append(buttonDone);
    buttons.append(buttonDelet);
    li.append(p);
    li.append(buttons);

    if (index.done == true) {
      buttonDone.textContent = "Отмена";
      li.style.backgroundColor = "#67E667";
    } else {
      buttonDone.textContent = "Отметить";
      li.style.backgroundColor = "#6C8CD5";
    }

    buttonDone.addEventListener("click", (e) => {
      e.preventDefault();
      if (buttonDone.textContent == "Отметить") {
        buttonDone.textContent = "Отмена";
        li.style.backgroundColor = "#67E667";
      } else if (buttonDone.textContent == "Отмена") {
        buttonDone.textContent = "Отметить";
        li.style.backgroundColor = "#6C8CD5";
      }
      RewriteLocalArray(name);
    });

    buttonDelet.addEventListener("click", (e) => {
      e.preventDefault();
      if (confirm("Вы точно хотите удалить дело?")) {
        li.remove(EventTarget);
        RewriteLocalArray(name);
      }
    });

    ul.append(li);
  }
}
