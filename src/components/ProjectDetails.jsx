import { Button } from "./Button";

export function ProjectDetails({ project, onDelete }) {
  const { title, description, dueDate } = project;

  const formattedDate = new Date(dueDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="w-[35rem] mt-16">
      <header className="pb-4 mb-4 border-b-2 border-slate-300">
        <div className="flex items-center justify-between">
          <h1 className="mb-2 text-3xl font-bold text-slate-600">{title}</h1>
          <Button
            className="text-slate-600 hover:text-slate-950"
            onClick={onDelete}
          >
            Delete
          </Button>
        </div>
        <p className="mb-4 text-slate-400">{formattedDate}</p>
        <p className="text-slate-600 whitespace-pre-wrap">{description}</p>
      </header>
      TASKS
    </div>
  );
}
