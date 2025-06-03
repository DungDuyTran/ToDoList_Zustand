"use client";
import React, { useState } from "react";
import useTodoStore from "../store/useTodoStore";
import TodoItem from "./TodoItem";

const TodoList = () => {
  // Lọc và hiển thị danh sách task theo trạng thái.
  const [filter, setFilter] = useState<"all" | "done" | "todo">("all");
  const tasks = useTodoStore((state) => state.tasks);

  // Lọc danh sách task theo trạng thái
  const filteredTasks = tasks.filter((task) => {
    if (filter === "done") return task.done;
    if (filter === "todo") return !task.done;
    return true;
  });

  return (
    <div>
      <h2 className="w-full h-20 text-center font-semibold text-4xl leading-[80px]">
        TodoList
      </h2>

      {/* Nút lọc */}
      <div className="ml-auto mr-auto w-5/6 mb-6 flex justify-between">
        <button
          onClick={() => setFilter("all")}
          className={`rounded-xs w-[30%] leading-10 cursor-pointer hover:opacity-80 ${
            filter === "all" ? "bg-gray-600 text-white" : "bg-gray-300"
          }`}
        >
          All
        </button>
        <button
          onClick={() => setFilter("done")}
          className={`rounded-xs w-[30%] leading-10 cursor-pointer hover:opacity-80 ${
            filter === "done" ? "bg-gray-600 text-white" : "bg-gray-300"
          }`}
        >
          Done
        </button>
        <button
          onClick={() => setFilter("todo")}
          className={`rounded-xs w-[30%] leading-10 cursor-pointer hover:opacity-80 ${
            filter === "todo" ? "bg-gray-600 text-white" : "bg-gray-300"
          }`}
        >
          Todo
        </button>
      </div>

      {/* Danh sách task */}
      <div>
        {filteredTasks.length > 0 ? (
          filteredTasks.map((task) => <TodoItem key={task.id} task={task} />)
        ) : (
          <p className="text-center text-gray-500">Không có gì</p>
        )}
      </div>
    </div>
  );
};

export default TodoList;
