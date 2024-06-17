"use client";
import { useRouter } from "next/navigation";

const TaskCard = ({ task }) => {
  const router = useRouter();

  return (
    <div
      className="flex h-full flex-col gap-2 justify-between bg-slate-900 p-3 hover:outline-2 hover:outline hover:outline-slate-500 hover:cursor-pointer"
      onClick={() => router.push(`/tasks/edit/${task.id}`)}
    >
      <div>
        <h1 className="text-3xl font-bold mb-4">{task.id}.</h1>
        <h2 className="text-2xl font-bold mb-4">{task.title}</h2>
        <div className="flex flex-col gap-y-1 mb-4">
          <h3 className="text-xl font-semibold">Descripción:</h3>
          <p className="bg-slate-800 rounded-md p-2">{task.description}</p>
        </div>
      </div>
      <p className="left-full">
        {new Date(task.createdAt).toLocaleDateString()}
      </p>
    </div>
  );
};

export default TaskCard;
