(function () {
  let arrayObj;

  // Функция создания хэдера
  function CreateAppList(heading_text) {
    let heading = document.createElement("h1");
    heading.className = "h1";
    heading.textContent = heading_text;
    return heading;
  }

  // Функция создания формы и ее элементов
  function CreateToDoItemForm() {
    let form = document.createElement("form");
    let input = document.createElement("input");
    let buttonAdd = document.createElement("button");
    const div_IB = document.createElement("div");

    form.className = "form";

    input.className = "input";
    input.placeholder = "Введите название записи";

    buttonAdd.className = "buttonAdd waves-effect waves-light btn";
    buttonAdd.textContent = "Добавить";
    buttonAdd.disabled = true;

    div_IB.className = "div_IB";

    return {
      form,
      div_IB,
      input,
      buttonAdd,
    };
  }

  function CreateUl() {
    const ul = document.createElement("ul");
    ul.className = "ul";
    return ul;
  }

  function CreateLi() {
    let li = document.createElement("li");
    let a = document.createElement("p");
    let buttons = document.createElement("div");
    let buttonDone = document.createElement("button");
    let buttonDelet = document.createElement("button");
    const ul = document.querySelector(".ul");
    const input = document.querySelector(".input");
    li.className = "li_todo collection-item";
    li.style = "";

    const div = document.createElement("div");
    div.className = "divElements";
    li.append(div);

    a.className = "a";
    div.append(a);

    buttons.className = "buttons_todo";
    div.append(buttons);

    arrayObj.push({ name: input.value, done: false });
    localStorage.setItem("MyWork", JSON.stringify(arrayObj));
    const index = arrayObj.length - 1;
    a.textContent = input.value;
    buttonDone.style.backgroundColor = "rgb(120,219,226)";
    buttonDone.addEventListener("click", (e) => {
      e.preventDefault();
      if (buttonDone.textContent == "Отметить") {
        buttonDone.style.backgroundColor = "rgb(66,133,180)";
        buttonDone.textContent = "Отмена";
        li.style.backgroundColor = "rgb(68,148,74)";
        arrayObj[index].done = true;
        RewriteLocalAarray();
      } else if (buttonDone.textContent == "Отмена") {
        li.style.backgroundColor = "";
        buttonDone.style.backgroundColor = "rgb(120,219,226)";
        buttonDone.textContent = "Отметить";
        arrayObj[index].done = false;
        RewriteLocalAarray();
      }
      localStorage.setItem("MyWork", JSON.stringify(arrayObj));
    });

    buttonDelet.style.backgroundColor = "rgb(238,32,77)";
    buttonDelet.addEventListener("click", (e) => {
      e.preventDefault();
      if (confirm("Вы точно хотите удалить запись?")) {
        li.remove(EventTarget);
        RewriteLocalAarray();
      }
    });
    buttonDone.className = "buttonDone waves-effect waves-light btn";
    buttonDone.textContent = "Отметить";
    buttons.append(buttonDone);

    buttonDelet.className = "buttonDelet waves-effect waves-light btn";
    buttonDelet.textContent = "Удалить";

    input.value = "";
    buttons.append(buttonDelet);
    ul.append(li);
    console.log(ul.innerHTML);
    // return ul;
  }

  function LocalArray(array) {
    // console.log(array)
    for (let i of array) {
      let li = document.createElement("li");
      let a = document.createElement("p");
      let buttons = document.createElement("div");
      let buttonDone = document.createElement("button");
      let buttonDelet = document.createElement("button");
      const ul = document.querySelector(".ul");

      li.className = "li_todo collection-item";
      li.style = "";

      const div = document.createElement("div");
      div.className = "divElements";
      li.append(div);

      a.className = "a";
      div.append(a);

      buttons.className = "buttons_todo";
      div.append(buttons);
      buttonDone.className = "buttonDone waves-effect waves-light btn";
      buttonDone.textContent = "Отметить";
      buttons.append(buttonDone);

      buttonDelet.className = "buttonDelet waves-effect waves-light btn";
      buttonDelet.textContent = "Удалить";
      buttons.append(buttonDelet);
      a.textContent = i.name;
      buttonDone.style.backgroundColor = "rgb(120,219,226)";
      if (i.done == true) {
        li.style.backgroundColor = "rgb(68,148,74)";
        buttonDone.style.backgroundColor = "rgb(66,133,180)";
        buttonDone.textContent = "Отмена";
      } else {
        li.style.backgroundColor = "";
        buttonDone.style.backgroundColor = "rgb(120,219,226)";
        buttonDone.textContent = "Отметить";
      }
      buttonDone.addEventListener("click", (e) => {
        e.preventDefault();
        if (buttonDone.textContent == "Отметить") {
          buttonDone.style.backgroundColor = "rgb(66,133,180)";
          buttonDone.textContent = "Отмена";
          li.style.backgroundColor = "rgb(68,148,74)";
        } else if (buttonDone.textContent == "Отмена") {
          li.style.backgroundColor = "";
          buttonDone.style.backgroundColor = "rgb(120,219,226)";
          buttonDone.textContent = "Отметить";
        }
        RewriteLocalAarray();
      });

      buttonDelet.style.backgroundColor = "rgb(238,32,77)";
      buttonDelet.addEventListener("click", (e) => {
        e.preventDefault();
        if (confirm("Вы точно хотите удалить запись?")) {
          li.remove(EventTarget);
          RewriteLocalAarray();
        }
      });
      ul.append(li);
    }
  }

  function RewriteLocalAarray() {
    const liArray = document.getElementsByClassName("li_todo");
    const aArray = document.getElementsByClassName("a");
    const buttonDone = document.getElementsByClassName("buttonDone");
    let arrayObj = [];
    for (let i = 0; i < liArray.length; i++) {
      let status = false;
      if (buttonDone[i].innerText == "ОТМЕНА") {
        status = true;
      }
      arrayObj.push({ name: aArray[i].textContent, done: status });
    }
    localStorage.setItem("MyWork", JSON.stringify(arrayObj));
  }

  function CreateToDo(nameS, heading_text) {
    // localStorage.clear()
    let conteiner = document.querySelector(".conteiner");
    const form = CreateToDoItemForm().form;
    const buttonAdd = CreateToDoItemForm().buttonAdd;
    const input = CreateToDoItemForm().input;
    const div_IB = CreateToDoItemForm().div_IB;
    conteiner.append(CreateAppList(heading_text));
    conteiner.append(form);
    div_IB.append(input);
    div_IB.append(buttonAdd);
    form.append(div_IB);
    conteiner.append(CreateUl());

    console.log(JSON.parse(localStorage.getItem(nameS)));
    arrayObj = JSON.parse(localStorage.getItem(nameS)) || [
      { name: "Помыть собаку", done: true },
      { name: "Помыть собаку", done: false },
      { name: "Помыть собаку", done: true },
    ];
    console.log(arrayObj);

    LocalArray(arrayObj);

    setInterval(() => {
      if (input.value != "") {
        buttonAdd.removeAttribute("disabled");
      } else {
        buttonAdd.setAttribute("disabled", "disabled");
      }
    });

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      console.log("Привет");
      CreateLi();
    });

    // window.addEventListener('beforeunload', ()=>{
    //   RewriteLocalAarray(name)
    // })
  }
  window.myFunction = CreateToDo;
})();
