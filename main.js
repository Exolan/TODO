(function(){
  document.addEventListener('DOMContentLoaded',()=>{
    const main = document.querySelector('.main')

    main.append(createAppList())
    main.append(createTodoItemForm())
    main.append(createTodoList())
  })
  
  function createAppList(){
    const name = document.createElement('h1')
    name.textContent = "Список дел"
    name.className = "name"
    name.id = "name"
    return name
  }


  function createTodoItemForm() {
    const form = document.createElement('form')
    form.className="form"


    const input = document.createElement('input')
    input.className='input'
    input.id='input'
    form.append(input)

    const buttonAdd=document.createElement('button')
    buttonAdd.className='class="waves-effect waves-light btn-small'
    buttonAdd.id='buttonAdd'
    buttonAdd.innerText='Добавить дело'
    buttonAdd.type='button'
    buttonAdd.style.backgroundColor="rgb(120,219,226)"
    buttonAdd.addEventListener('click', createTodoItem)
    form.append(buttonAdd)

    return form
  }


  function createTodoList() {
    const ul = document.createElement('ul')
    ul.className='ul'
    ul.id='ul'
    return ul
  }


  function createTodoItem(){
    if (input.value!=""){
      const ul = document.getElementById('ul')
      const input = document.getElementById('input')
      const li = document.createElement('li')
      li.className = 'collection-item'
      li.id='id'
      li.style="list-style-type: none"
    
      const div = document.createElement("div")
      div.className="divElements"
      li.append(div)
    
      const p = document.createElement('p')
      p.className="text"
      p.textContent=input.value
      div.append(p)

      const buttons = document.createElement('div')
      buttons.className='buttons'
      div.append(buttons)

      let buttonDone=document.createElement('button')
      buttonDone.type='button'
      buttonDone.className='class="waves-effect waves-light btn-small'
      buttonDone.id='buttonDone'
      buttonDone.textContent='Выполнено'
      buttonDone.style.backgroundColor="rgb(120,219,226)"
      buttonDone.addEventListener('click',()=>{
        if(buttonDone.textContent=="Выполнено"){
          buttonDone.style.backgroundColor="rgb(66,133,180)"
          buttonDone.textContent='Отмена'
          li.style.backgroundColor = 'rgb(68,148,74)'
        }
        else if(buttonDone.textContent=='Отмена'){
          li.style.backgroundColor = ''
          buttonDone.style.backgroundColor="rgb(120,219,226)"
          buttonDone.textContent='Выполнено'
        }
      })
      buttons.append(buttonDone)

      let buttonDelet=document.createElement('button')
      buttonDelet.type='button'
      buttonDelet.className='class=waves-effect waves-light btn-small'
      buttonDelet.style.backgroundColor="rgb(238,32,77)"
      buttonDelet.id='buttonDelet'
      buttonDelet.textContent='Удалить'
      buttonDelet.addEventListener('click', ()=>{
        if(confirm('Вы точно хотите удалить запись?')){
          li.remove(EventTarget)
        }
          
      })
      buttons.append(buttonDelet)
      input.value=""
      ul.append(li)
     
    }
    else{
      alert('Строка не может быть пустой!')
    }
    return ul
  }
})()