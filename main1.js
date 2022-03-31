(function(){
  // Функция создания хэдера
  function CreateAppList(heading_text){
    let heading = document.createElement('h1')
    heading.className = "h1"
    heading.textContent = heading_text
    return heading
  }

  // Функция создания формы и ее элементов
  function CreateToDoItemForm(){
    let form = document.createElement('form')
    let input = document.createElement('input')
    let buttonAdd = document.createElement('button')
    const div_IB = document.createElement('div')

    form.className = 'form'

    input.className = 'input'
    input.placeholder = 'Введите название записи'
    

    buttonAdd.className = 'buttonAdd waves-effect waves-light btn'
    buttonAdd.textContent = 'Добавить'
    buttonAdd.disabled = true

    div_IB.className = "div_IB"

    form.addEventListener('submit', CreateTodoItem)

    
    return {
      form,
      div_IB,
      input,
      buttonAdd
    }
  }

  function CreateUl(){
    const ul = document.createElement('ul')
    ul.className = "ul"
    return ul
  }

  function CreateTodoItem(e) {
    e.preventDefault();
    let index = 0
    const li = document.createElement("li");
    li.className = "li";

    const ul = document.querySelector(".ul");
    const input = document.querySelector(".input");

    const buttons = document.createElement("div");
    buttons.className = "buttons";

    const a = document.createElement("a");
    a.className = "a";
    a.textContent = input.value;

    const buttonDone = document.createElement("button");
    const buttonDelete = document.createElement("button");
    let color
      
    buttonDone.className = "buttonDone waves-effect waves-light btn-small blue";
    buttonDone.textContent = "Отметить";

    buttonDelete.className = "buttonDelete waves-effect waves-light btn-small red";
    buttonDelete.textContent = "Удалить задачу"

      ul.append(li);
      li.append(a);
      li.append(buttons);
      buttons.append(buttonDone);
      buttons.append(buttonDelete);

      buttonDone.addEventListener("click", (e) => {
        e.preventDefault()
        if (buttonDone.textContent == "Отметить") {
          buttonDone.textContent = "Отмена";
          li.style.backgroundColor = "rgb(68,148,74)";
          color = true
          arrayObj[index] = { name: a.textContent, done: color }
        }
        else {
          buttonDone.textContent = "Отметить";
          li.style.backgroundColor = "";
          color = false
          arrayObj[index] = { name: a.textContent, done: color }
        }
      });

        buttonDelete.addEventListener("click", (e) => {
          e.preventDefault()
          li.remove();
          delete arrayObj[index];
        });

      arrayObj[index] = { name: a.textContent, done: color };
      index++;
    } 
    
    function CreateLocalStorage(name) {
    const arrayStorage = JSON.parse(localStorage.getItem(name));
    for (let i in arrayStorage) {

    if (arrayStorage[i] != null) {
      const li = document.createElement("li");
      li.className = "li";

      const ul = document.querySelector(".ul");


      const buttons = document.createElement("div");
      buttons.className = "buttons";

      const a = document.createElement("a");
      a.className = "a";
      a.textContent = arrayStorage[i].name

      const buttonDone = document.createElement("button");
      const buttonDelete = document.createElement("button");
      let color
      let index
      
      buttonDone.className = "buttonDone waves-effect waves-light btn-small blue";
      buttonDone.textContent = "Отметить";

      buttonDelete.className = "buttonDelete waves-effect waves-light btn-small red";
      buttonDelete.textContent = "Удалить задачу"

      ul.append(li);
      li.append(a);
      li.append(buttons);
      buttons.append(buttonDone);
      buttons.append(buttonDelete);

      buttonDone.addEventListener("click", (e) => {
        e.preventDefault()
        if (buttonDone.textContent == "Отметить") {
          buttonDone.textContent = "Отмена";
          li.style.backgroundColor = "rgb(68,148,74)";
          color = true
          arrayObj[index] = { name: a.textContent, done: color }
        }
        else {
          buttonDone.textContent = "Отметить";
          li.style.backgroundColor = "";
          color = false
          arrayObj[index] = { name: a.textContent, done: color }
        }
      });

        buttonDelete.addEventListener("click", (e) => {
          e.preventDefault()
          li.remove();
          delete arrayObj[index];
        });

    }
    localStorage.removeItem(name);
  }
}
    function CreateToDo(name, heading_text){
      let conteiner = document.querySelector('.conteiner')
      const form = CreateToDoItemForm().form
      const buttonAdd = CreateToDoItemForm().buttonAdd
      const input = CreateToDoItemForm().input
      const div_IB = CreateToDoItemForm().div_IB
      conteiner.append(CreateAppList(heading_text))
      conteiner.append(form)
      div_IB.append(input)
      div_IB.append(buttonAdd)
      form.append(div_IB)
      conteiner.append(CreateUl())
      CreateLocalStorage(name)

      setInterval(()=>{
        if (input.value != '' ){
          buttonAdd.removeAttribute("disabled")
        }
        else{
          buttonAdd.setAttribute("disabled", "disabled")
        }
      })
      window.addEventListener('beforeunload', (e)=>{
      e.preventDefault()
      localStorage.setItem(name, JSON.stringify(arrayObj));
    })
    }
    
    let arrayObj = []
    window.myFunction = CreateToDo
}())
