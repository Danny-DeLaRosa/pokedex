"use client";
import { useState, useEffect } from "react";
import "@/app/globals.css";

type Task = {
  title: string;
  description: string;
  deadline: Date;
  is_done: boolean;
};

const TaskList = () => {
  const [task, setTask] = useState<Task[]>([]);

  async function getLocal() {
    const res = await fetch("http://localhost:8000/api/tasks");
    const data = await res.json();
    console.log(data.data);
    setTask(data.data);
  }

  useEffect(() => {
    getLocal();
  }, []);

  return (
    <main className="overflow-auto m-auto bg-red-500 text-black flex-col w-3/6 h-screen rounded-lg shadow-red-600 border-red-400 border-2 flex justify-center items-center shadow-md">
      <div>
        {task.map((tasks) => (
          <div>{tasks.title}</div>
        ))}
      </div>
    </main>
  );
};

export default TaskList;
