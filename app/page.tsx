import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import DeleteButton from "./components/DeleteButton";

export default function Home() {
  return (
    <div className="max-w-lg mx-auto mt-3 p-4 bg-blue-50 border-1">
      <TodoInput />
      <TodoList />
      <DeleteButton />
    </div>
  );
}
