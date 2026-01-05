import { useContext, useState } from "react";
import { TodoContext } from "../../Context/TodoContext";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { todos, deleteTodo } = useContext(TodoContext);
  const [editIndex, setEditIndex] = useState(null);

  return (
    <div>
      <TodoForm editIndex={editIndex} setEditIndex={setEditIndex} />

      {todos.length === 0 && (
        <p className="text-center text-gray-500">
          No todos yet 
        </p>
      )}

      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          index={index}
          todo={todo}
          onEdit={() => setEditIndex(index)}
          onDelete={() => deleteTodo(index)}
        />
      ))}
    </div>
  );
};

export default TodoList;

