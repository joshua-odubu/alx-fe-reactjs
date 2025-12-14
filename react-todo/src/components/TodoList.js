import { useState } from "react";

function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Write Tests", completed: false },
    { id: 3, text: "Build Todo App", completed: false },
  ]);

  const [input, setInput] = useState("");

  const addTodo = () => {
    if (!input.trim()) return;

    setTodos([
      ...todos,
      { id: Date.now(), text: input, completed: false },
    ]);
    setInput("");
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <input
        placeholder="Add todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addTodo}>Add</button>

      <ul>
        {todos.map((todo) => (
            <li
                key={todo.id}
                onClick={() => toggleTodo(todo.id)}
                style={{
                    textDecoration: todo.completed ? "line-through" : "none",
                    cursor: "pointer",
                }}
                >
                {todo.text}
                <button
                    onClick={(e) => {
                    e.stopPropagation();
                    deleteTodo(todo.id);
                    }}
                >
                    X
                </button>
            </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;