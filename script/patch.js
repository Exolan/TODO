export async function patch(id, status) {
  const responce = await fetch(`http://localhost:3000/api/todos/${id}`, {
    method: "PATCH",
    body: JSON.stringify({
      done: status,
    }),
  });
}
