import { postItem } from "./postItem.js";

export async function RewriteLocalArray(name, arrayObj) {
  const liArray = document.querySelectorAll(".li_todo");
  const p = document.querySelectorAll(".text_li");
  const buttonDone = document.querySelectorAll(".buttonDone_li");

  arrayObj = [];
  for (let index = 0; index < liArray.length; index++) {
    let status = false;
    if (buttonDone[index].innerText == "Отмена") {
      status = true;
    }
    postItem(p[index].textContent, name, arrayObj);
  }
  // localStorage.setItem(name, JSON.stringify(arrayObj));
}
