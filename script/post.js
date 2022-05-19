export async function post(name, owner, done) {
  const responce = await fetch("http://localhost:3000", {
    method: "POST",
    body: JSON.stringify({
      name: name,
      owner: owner,
      done: done,
    }),
  });
}
