import TodoItem from "./TodoItem";

// Menampilkan daftar to-do atau pesan kosong jika belum ada tugas
function TodoList({ todos, onToggle, onDelete }) {
    if (todos.length === 0){
        return <p className="empty-message">Belum ada tugas</p>
    }

    return(
        <ul className="todo-list">
            {todos.map((todo) => (
                <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={onToggle}
                onDelete={onDelete}
                />
            ))}
        </ul>
    )
}

export default TodoList;