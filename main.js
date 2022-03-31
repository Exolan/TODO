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

  function CreateLi(name=null, array=null,index=null){
    let li = document.createElement('li')
    let a = document.createElement('a')
    let buttons = document.createElement('div')
    let buttonDone = document.createElement('button')
    let buttonDelet = document.createElement('button')
    const ul = document.querySelector('.ul')
    const input = document.querySelector('.input')
    li.className = 'li_todo collection-item'
    li.style = ''

    const div = document.createElement("div");
    div.className = "divElements";
    li.append(div);
    let color
    let text

    a.className = "a"
    div.append(a)

    buttons.className = "buttons_todo"
    div.append(buttons)


    if (index == null){
      a.textContent = input.value
      buttonDone.style.backgroundColor = "rgb(120,219,226)";
      buttonDone.addEventListener("click", (e) => {
        e.preventDefault()
        if (buttonDone.textContent == "Отметить") {
          buttonDone.style.backgroundColor = "rgb(66,133,180)";
          buttonDone.textContent = "Отмена";
          li.style.backgroundColor = "rgb(68,148,74)";
          LocalTry(name, array)
        } 
        else if (buttonDone.textContent == "Отмена") {
          li.style.backgroundColor = "";
          buttonDone.style.backgroundColor = "rgb(120,219,226)";
          buttonDone.textContent = "Отметить";
          LocalTry(name, array)
        }
      })

      buttonDelet.style.backgroundColor = "rgb(238,32,77)";
      buttonDelet.addEventListener("click", (e) => {
      e.preventDefault()
      if (confirm("Вы точно хотите удалить запись?")) {
        li.remove(EventTarget);
        }
        LocalTry(name, array)
      })
    }
    


      else{
        a.textContent = index.name
        if (index.done == true){
          li.style.backgroundColor = "rgb(68,148,74)"
          buttonDone.textContent = "Отмена"
        }
        else{
          li.style.backgroundColor = ""
          buttonDone.textContent = "Отметить"
        }
        li.style.backgroundColor = color
        buttonDone.textContent = text
        buttonDone.style.backgroundColor = "rgb(120,219,226)";
        buttonDone.addEventListener("click", (e) => {
        e.preventDefault()
        if (buttonDone.textContent == "Отметить") {
          buttonDone.style.backgroundColor = "rgb(66,133,180)";
          buttonDone.textContent = "Отмена";
          li.style.backgroundColor = "rgb(68,148,74)";
          LocalTry(name, array)
        } else if (buttonDone.textContent == "Отмена") {
          li.style.backgroundColor = "";
          buttonDone.style.backgroundColor = "rgb(120,219,226)";
          buttonDone.textContent = "Отметить";
          LocalTry(name, array)
        }
        })
        buttonDelet.style.backgroundColor = "rgb(238,32,77)";
        buttonDelet.addEventListener("click", (e) => {
        e.preventDefault()
        if (confirm("Вы точно хотите удалить запись?")) {
          li.remove(EventTarget);
        }
        LocalTry(name, array)
        });
      }
      buttonDone.className = 'buttonDone waves-effect waves-light btn'
      buttonDone.textContent = 'Отметить'
      buttons.append(buttonDone)
      
      buttonDelet.className = 'buttonDelet waves-effect waves-light btn'
      buttonDelet.textContent = 'Удалить'
      
      input.value = "";
      buttons.append(buttonDelet)
      ul.append(li)
      return ul
  }

  function LocalArray(name, array){
    if (array != null){
      for (const index of array){
        CreateLi(name, array, index)
      }
    }
  }

  function LocalTry(name, array){
    localStorage.removeItem(name)
    array = []
    let liArray = document.querySelectorAll('.li_todo')
    let a = document.querySelectorAll('.a')
    let status = false
    let schetchik = 0
    for (let i of liArray){
      if (i.style.backgroundColor == "rgb(68,148,74)"){
        status = true
      }
      else if (i.style.backgroundColor == ""){
        status = false
      }
      array.push({name: a[schetchik].textContent, done: status})
      schetchik++
    }
    console.log(array)
    localStorage.removeItem(name)
    localStorage.setItem(name, JSON.stringify(array))
    
  }

  function CreateToDo(heading_text, name, array=null){
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
    localStorage.setItem(name, JSON.stringify(array)||[])
    LocalArray(name, array)

    setInterval(()=>{
      if (input.value != '' ){
        buttonAdd.removeAttribute("disabled")
      }
      else{
        buttonAdd.setAttribute("disabled", "disabled")
      }
    })

    form.addEventListener('submit', (e)=>{
      e.preventDefault();
      CreateLi()
      LocalTry(name, array)
    })
  }



  arrayWork = [
    {name: 'Помыть машину', done: true},
    {name: 'Покормить Лешу', done: false},
  ]
  window.arrayWork = arrayWork
  
  window.myFunction = CreateToDo
})();