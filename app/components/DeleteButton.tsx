"use client";
import React from "react";
import useTodoStore from "../store/useTodoStore";

const DeleteButton = () => {
  // 2 cái Lấy hàm từ store.
  const deleteDoneTasks = useTodoStore((state) => state.deleteDoneTasks);
  const deleteAllTasks = useTodoStore((state) => state.deleteAllTasks);

  return (
    <div className="ml-auto mr-auto w-5/6 pb-11 pt-3 flex justify-between">
      <button
        onClick={deleteDoneTasks}
        className="rounded-xs w-[45%] leading-10 bg-red-800 text-white cursor-pointer hover:opacity-80"
      >
        Delete done tasks
      </button>
      <button
        onClick={deleteAllTasks}
        className="rounded-xs w-[45%] leading-10 bg-red-800 text-white cursor-pointer hover:opacity-80"
      >
        Delete all tasks
      </button>
    </div>
  );
};

export default DeleteButton;
