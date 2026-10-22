function TodoItem({todo, onToggle, onDelete}) {
    return (
        //list item todolist dan delete button
        <li className="todo-item">
            <label className={todo.completed ? 'completed' : ''}>
                <input 
                type="checkbox"
                checked={todo.completed}
                onChange={() => onToggle(todo.id)} 
                />

                <span>{todo.title}</span>
            </label>

            <button 
            type="button" 
            className="delete-button"
            onClick={() => onDelete(todo.id)}>
                Hapus
            </button>
        </li>
    );
}

export default TodoItem;