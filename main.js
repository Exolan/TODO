(function () {
  window.functionToDo = ToDo;

  let arrayObj;

  function CreateHeading(heading_text) {
    const heading = document.createElement("h1");
    heading.className = "heading";
    heading.textContent = heading_text;
    return heading;
  }

  function CreateForm() {
    const form = document.createElement("form");
    const input = document.createElement("input");
    const buttonAdd = document.createElement("button");

    form.className = "form";
    input.className = "input";
    buttonAdd.className = "buttonAdd";

    input.placeholder = "Введите дело";
    buttonAdd.textContent = "Добавить";
    buttonAdd.setAttribute("disabled", "disabled");

    return { form, input, buttonAdd };
  }

  function CreateUl() {
    const ul = document.createElement("ul");
    ul.className = "ul_todo";
    return ul;
  }

  function CreateLi(name) {
    const ul = document.querySelector(".ul_todo");
    const li = document.createElement("li");
    const p = document.createElement("p");
    const buttons = document.createElement("div");
    const buttonDone = document.createElement("button");
    const buttonDelet = document.createElement("button");
    const input = document.querySelector(".input");

    li.className = "li_todo";
    p.className = "text_li";
    buttons.className = "buttons_li";
    buttonDone.className = "buttonDone_li";
    buttonDelet.className = "buttonDelet_li";

    p.textContent = input.value;
    buttonDone.textContent = "Отметить";
    buttonDelet.textContent = "Удалить";

    arrayObj.push({ name: input.value, done: false });
    localStorage.setItem(name, JSON.stringify(arrayObj));
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
        arrayObj[index].done = true;
      } else if (buttonDone.textContent == "Отмена") {
        buttonDone.textContent = "Отметить";
        li.style.backgroundColor = "#6C8CD5";
        arrayObj[index].done = false;
      }
      RewriteLocalAarray(name);
      input.value = "";
    });

    buttonDelet.addEventListener("click", (e) => {
      e.preventDefault();
      if (confirm("Вы точно хотите удалить дело?")) {
        li.remove(EventTarget);
        RewriteLocalAarray(name);
      }
    });

    ul.append(li);
  }

  function CreateLocalUl(arrayObj, name) {
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
        RewriteLocalAarray(name);
      });

      buttonDelet.addEventListener("click", (e) => {
        e.preventDefault();
        if (confirm("Вы точно хотите удалить дело?")) {
          li.remove(EventTarget);
          RewriteLocalAarray(name);
        }
      });

      ul.append(li);
    }
  }

  function RewriteLocalAarray(name) {
    const liArray = document.querySelectorAll(".li_todo");
    const p = document.querySelectorAll(".text_li");
    const buttonDone = document.querySelectorAll(".buttonDone_li");

    arrayObj = [];
    for (let index = 0; index < liArray.length; index++) {
      let status = false;
      if (buttonDone[index].innerText == "Отмена") {
        status = true;
      }
      arrayObj.push({ name: p[index].textContent, done: status });
    }
    localStorage.setItem(name, JSON.stringify(arrayObj));
  }

  function ToDo(heading_text, name) {
    const conteiner = document.querySelector(".conteiner");
    const form = CreateForm().form;
    const input = CreateForm().input;
    const buttonAdd = CreateForm().buttonAdd;

    conteiner.append(CreateHeading(heading_text));
    conteiner.append(form);
    form.append(input);
    form.append(buttonAdd);
    conteiner.append(CreateUl());

    arrayObj = JSON.parse(localStorage.getItem(name)) || [
      { name: "Покормить Лешу", done: true },
      { name: "Найти Бабиджона", done: false },
      { name: "Встать через не можу", done: true },
    ];
    CreateLocalUl(arrayObj, name);

    setInterval(() => {
      if (input.value != "") {
        buttonAdd.removeAttribute("disabled");
      } else {
        buttonAdd.setAttribute("disabled", "disabled");
      }
    });

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      CreateLi(name);
      input.value = "";
    });
  }
})();
