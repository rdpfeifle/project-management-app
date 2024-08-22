import { Button } from "./Button";

export function NewTask() {
  return (
    <div className="flex items-center gap-4">
      <input type="text" className="py-1 px-2 w-64 rounded-sm bg-slate-200" />
      <Button className="text-slate-700 hover:text-slate-950">Add Task</Button>
    </div>
  );
}
