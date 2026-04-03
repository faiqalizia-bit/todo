import { useContext, useEffect, useState } from "react";
import { TodoContext } from "../../Context/TodoContext";

const TodoForm = ({ editIndex, setEditIndex }) => {
  const { addTodo, editTodo, todos } = useContext(TodoContext);
  const [text, setText] = useState("");

  useEffect(() => {
    if (editIndex !== null && todos[editIndex]) {
      setText( todos[editIndex].text);
    } else {
      setText("");
    }
  }, [editIndex, todos]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    if (editIndex !== null) {
      editTodo(editIndex, text);
      setEditIndex(null);
    } else {
      addTodo(text);
    }

    setText("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-2 mb-6"
    >
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter a todo..."
        className="flex-1 px-4 py-2 rounded-lg border border-gray-300
                   focus:outline-none focus:ring-2 focus:ring-cyan-500"
      />
      <button
        className={`px-5 py-2 rounded-lg font-medium text-white
        ${editIndex !== null
          ? "bg-yellow-500 hover:bg-yellow-600"
          : "bg-cyan-600 hover:bg-cyan-700"}`}
      >
        {editIndex !== null ? "Update" : "Add"}
      </button>
    </form>
  );
};

export default TodoForm;
