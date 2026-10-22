import { useState } from "react";

// Komponen form untuk menerima input teks dan menambahkan tugas baru
function TodoForm({ onAddTodo }) {
    const [title, setTitle] = useState("");

    // Menangani submit form, validasi teks kosong, dan mengirim data ke parent
    function handleSubmit(event){
        event.preventDefault();

        if (!title.trim()) return;
        
        onAddTodo(title.trim());
        setTitle("")
    }

    return(
        <form onSubmit={handleSubmit} className="todo-form">
            <input 
                type="text"
                placeholder="Apa yang mau kamu kerjakan? "
                value={title}
                onChange={(event) => setTitle(event.target.value)}
            />
            <button type="submit">Tambah</button>
        </form>
    )
}

export default TodoForm;