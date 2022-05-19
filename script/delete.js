export async function deleteEl(id) {
  const responce = await fetch(`http://localhost:3000/api/todos/${id}`, {
    method: "DELETE",
  });
}
