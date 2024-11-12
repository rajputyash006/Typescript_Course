import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface ToDO {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then((response) => {
  const todo = response.data as ToDO;
  const id = todo.id;
  const title = todo.title;
  const statusOfTodo = todo.completed;
  printToDo(id, title, statusOfTodo);
});

const printToDo = (id: number, title: string, statusOfTodo: boolean) => {
  console.log(
    `
    User id is -> ${id}
    Todo With title -> ${title}
    Todo status -> ${statusOfTodo}
    `
  );
};
