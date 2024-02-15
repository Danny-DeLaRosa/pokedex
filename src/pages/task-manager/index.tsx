"use client";
import TaskList from "@/components/task-manager/TaskList";

const TaskManager = () => {
  return (
    <main className="flex h-screen  items-center justify-between p-24">
      <TaskList />
    </main>
  );
};

export default TaskManager;
