import { TodoProvider } from "./Context/TodoContext";
import TodoList from "./assets/components/TodoList";

const App = () => {
  return (
    <TodoProvider>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="w-full max-w-md bg-gray-50 p-6 rounded-xl shadow-lg">
          <h1 className="text-2xl font-bold text-center mb-6 text-cyan-600">
            Todo App 
          </h1>
          <TodoList />
        </div>
      </div>
    </TodoProvider>
  );
};

export default App;
