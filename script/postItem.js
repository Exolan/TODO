export async function postItem(name, owner, done = false) {
  const responce = await fetch("http://localhost:3000/api/todos", {
    method: "POST",
    body: JSON.stringify({
      name: name,
      owner: owner,
      done: done,
    }),
  });
}
