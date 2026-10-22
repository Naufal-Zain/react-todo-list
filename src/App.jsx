import { useEffect, useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

// Komponen utama aplikasi to-do list: mengelola state daftar tugas dan persistence ke localStorage
function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');

    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // Menambahkan tugas baru ke dalam daftar to-do
  function addTodo(title){
    const newTodo ={
      id: crypto.randomUUID(),
      title: title,
      completed: false
    };
    setTodos((currentTodos) => [...currentTodos, newTodo])
  }

  // Mengubah status tugas antara selesai (completed) atau belum selesai
  function toggleTodo(id) {
    setTodos((currentTodos) =>
      currentTodos.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  }

  // Menghapus tugas dari daftar berdasarkan ID
  function deleteTodo(id){
    setTodos((currentTodos) =>
      currentTodos.filter((todo) => todo.id !== id)
    );
  }

  const remainingTodos = todos.filter(
    (todo) => !todo.completed
  ).length;

  return (
    <main className="app-container">
      <h1>My To-Do List</h1>
      <p className="subtitle">Satu tugas dalam satu waktu.</p>

      <TodoForm onAddTodo={addTodo} />

      <div className="todo-summary">
        {remainingTodos} tugas belum selesai
      </div>

      <TodoList
        todos={todos}
        onToggle={toggleTodo}
        onDelete={deleteTodo}
      />
    </main>
  );
}

export default App;