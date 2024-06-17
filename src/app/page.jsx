import { prisma } from "@/libs/prisma";
import TaskCard from "@/components/TaskCard";
async function loadTasks() {
  return await prisma.task.findMany();
}

export const dynamic = "force-dynamic";

const Home = async () => {
  const tasks = await loadTasks();

  return (
    <section className="container mx-auto">
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-white m-4">
      {tasks.map((task) => (
        <div key={task.id} className="rounded-xl bg-slate-900 hover:cursor-pointer">
          <TaskCard task={task} key={task.id} />
        </div>
      ))}
    </div>
    </section>
  );
};

export default Home;
