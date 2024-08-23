import { Button } from "./Button";
import { NewTask } from "./NewTask";

export function Tasks({ tasks, onAdd, onDelete }) {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-slate-700">Tasks</h2>
      <NewTask onAdd={onAdd} />
      {tasks.length === 0 && (
        <p className="text-slate-800">
          This project does not have any tasks yet.
        </p>
      )}
      {tasks.length > 0 && (
        <ul className="mt-8 p-4 bg-slate-100 rounded-md space-y-4">
          {tasks.map((task) => {
            return (
              <li key={task.taskId} className="flex justify-between">
                <span>{task.text}</span>
                <Button
                  className="text-slate-700 hover:text-red-500"
                  onClick={onDelete}
                >
                  Clear
                </Button>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}
