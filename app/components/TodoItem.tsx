"use client";
import React, { useState } from "react";
import { FaPencilAlt, FaTrash } from "react-icons/fa";
import useTodoStore from "../store/useTodoStore";

type TaskProps = {
  task: {
    id: number;
    title: string;
    done: boolean;
  };
};

const TodoItem: React.FC<TaskProps> = ({ task }) => {
  // xác định chế độ chỉnh sửa.
  const [isEditing, setIsEditing] = useState(false);
  // chứa nội dung mới khi chỉnh sửa.
  const [newTitle, setNewTitle] = useState(task.title);
  // cả 3 là Lấy các hàm từ store.
  const toggleTask = useTodoStore((state) => state.toggleTask);
  const deleteTask = useTodoStore((state) => state.deleteTask);
  const updateTask = useTodoStore((state) => state.updateTask);

  // Lưu tiêu đề mới hoặc giữ nguyên nếu rỗng.
  const handleUpdate = () => {
    if (newTitle.trim()) {
      updateTask(task.id, newTitle.trim());
    } else {
      setNewTitle(task.title); // Giữ lại tiêu đề cũ nếu input rỗng
    }
    setIsEditing(false);
  };
  return (
    <div className="border border-neutral-400 rounded-xs ml-auto p-4 mb-5 mr-auto w-5/6 flex justify-between">
      {isEditing ? (
        <input
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          onBlur={handleUpdate} // Khi nhấn ra ngoài -> lưu
          onKeyDown={(e) => e.key === "Enter" && handleUpdate()} // Nhấn Enter -> lưu
          autoFocus
          className="border px-2 py-1 w-full"
        />
      ) : (
        <span
          className={task.done ? "line-through text-gray-500" : ""}
          onDoubleClick={() => setIsEditing(true)} // Nhấn đôi để chỉnh sửa
        >
          {task.title}
        </span>
      )}

      <div className="flex items-center">
        <input
          type="checkbox"
          checked={task.done}
          onChange={() => toggleTask(task.id)}
          className="cursor-pointer"
          // Checkbox để đánh dấu hoàn thành.
        />
        <FaPencilAlt
          className="cursor-pointer hover:opacity-80 mr-3 ml-3"
          onClick={() => setIsEditing(true)}
        />
        <FaTrash
          className="cursor-pointer hover:opacity-80"
          onClick={() => deleteTask(task.id)}
        />
      </div>
    </div>
  );
};

export default TodoItem;
