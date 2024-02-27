"use client";
import { useState, useEffect } from "react";

type Task = {
  title: string;
  description: string;
  deadline: Date;
  is_done: boolean;
};

const TaskManager = () => {
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
      <main className="bg-black">
        <div className="bg-red-500">
          {task.map((tasks) => (
            <div>{tasks.title}</div>
          ))}
        </div>
        <div className="">
          <span>Task 2.0</span>
        </div>
      </main>
  );
};

export default TaskManager;
