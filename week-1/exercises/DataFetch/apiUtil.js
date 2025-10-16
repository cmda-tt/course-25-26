async function fetchPosts(url) {
  return (await fetch(url)).json();
}
const data = await fetchPosts('https://jsonplaceholder.typicode.com/todos/');
console.log(data);

export { data };
