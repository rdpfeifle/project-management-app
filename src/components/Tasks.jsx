import { NewTask } from "./NewTask";

export function Tasks() {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-slate-700">Tasks</h2>
      <NewTask />
      <p className="text-slate-800">
        This project does not have any tasks yet.
      </p>
      <ul></ul>
    </section>
  );
}
