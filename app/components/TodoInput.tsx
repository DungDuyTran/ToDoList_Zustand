"use client";
import React, { useState } from "react";
import useTodoStore from "../store/useTodoStore";
// Lấy hàm addTask từ store.
const TodoInput = () => {
  const [task, setTask] = useState("");
  const addTask = useTodoStore((state) => state.addTask);
  // Nếu nhập không rỗng, thêm vào danh sách và reset input.
  const handleAddTask = () => {
    if (task.trim()) {
      addTask(task);
      setTask("");
    }
  };

  return (
    <div>
      <h2 className="w-full h-20 text-center font-semibold text-4xl leading-[80px]">
        TodoInput
      </h2>
      <div className="border border-neutral-400 rounded-xs ml-auto mr-auto p-6 w-5/6">
        <input
          className="rounded-xs w-full leading-10 block mb-5 border border-neutral-400 pl-3"
          type="text"
          placeholder="New todo"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button
          onClick={handleAddTask}
          className="rounded-xs w-full leading-10 block bg-[#2b8b9c] text-white cursor-pointer hover:opacity-80"
        >
          Add new task
        </button>
      </div>
    </div>
  );
};

export default TodoInput;
