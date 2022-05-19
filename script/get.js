export async function get() {
  const responce = await fetch("http://localhost:3000/api/todos");
  const array = await responce.json();
  console.log(array);
}
