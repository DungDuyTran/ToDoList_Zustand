import { create } from "zustand"; // Sử dụng Zustand để quản lý danh sách công việc.

type Task = {
  id: number;
  title: string;
  done: boolean;
};
// Tạo store Zustand
type TodoState = {
  tasks: Task[]; // danh sách công việc
  addTask: (title: string) => void; // thêm mới
  toggleTask: (id: number) => void; // đánh dấu hoàn thành
  deleteTask: (id: number) => void; // xóa công việc
  deleteDoneTasks: () => void; // xóa công việc đã hoàn thành
  deleteAllTasks: () => void; // xóa toàn bộ công việc
  updateTask: (id: number, newTitle: string) => void; // cập nhật tiêu đề công việc
};
// set : cập nhật trạng thái
const useTodoStore = create<TodoState>((set) => ({
  tasks: [], // Khởi tạo danh sách rỗng.
  // Thêm task mới vào danh sách.
  addTask: (title) =>
    set((state) => ({
      tasks: [...state.tasks, { id: Date.now(), title, done: false }],
    })),
  // Đảo trạng thái done khi nhấn vào checkbox.
  toggleTask: (id) =>
    set((state) => ({
      tasks: state.tasks.map((t) =>
        t.id === id ? { ...t, done: !t.done } : t
      ),
    })),
  // Xóa task theo id.
  deleteTask: (id) =>
    set((state) => ({ tasks: state.tasks.filter((t) => t.id !== id) })),
  // Xóa tất cả task đã hoàn thành.
  deleteDoneTasks: () =>
    set((state) => ({ tasks: state.tasks.filter((t) => !t.done) })),
  // Xóa toàn bộ danh sách.
  deleteAllTasks: () => set({ tasks: [] }),

  // Hàm cập nhật tiêu đề task
  updateTask: (id, newTitle) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === id ? { ...task, title: newTitle } : task
      ),
    })),
}));

export default useTodoStore;

// 1 : Thêm task: TodoInput → gọi addTask → useTodoStore cập nhật danh sách.
// 2 : Hiển thị task: TodoList lấy dữ liệu từ useTodoStore và render TodoItem.
// 3 : Đánh dấu hoàn thành: Checkbox gọi toggleTask → cập nhật done.
// 4 : Chỉnh sửa tiêu đề: Nhập tiêu đề mới → gọi updateTask.
// 5 : Xóa task: Nút xóa gọi deleteTask.
// 6 : Xóa hàng loạt: Nút xóa gọi deleteDoneTasks hoặc deleteAllTasks.
