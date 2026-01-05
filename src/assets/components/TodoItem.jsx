const TodoItem = ({ todo, index, onEdit, onDelete }) => {
  return (
    <div
      className="flex items-center justify-between bg-white
                 px-4 py-3 rounded-lg shadow-sm mb-3"
    >
      <span className="text-gray-800">{todo.text}</span>

      <div className="flex gap-2">
        <button
          onClick={onEdit}
          className="px-3 py-1 text-sm rounded-md
                     bg-blue-500 text-white hover:bg-blue-600"
        >
          Edit
        </button>
        <button
          onClick={onDelete}
          className="px-3 py-1 text-sm rounded-md
                     bg-red-500 text-white hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
