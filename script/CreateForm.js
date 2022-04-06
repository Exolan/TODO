export function CreateForm() {
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
