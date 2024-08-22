import { Button } from "./Button";

export function Sidebar({ onStartAddProject }) {
  return (
    <aside className="bg-slate-900 text-slate-50 w-1/3 px-8 py-16 ,md:w-72 rounded-r-xl">
      <h2 className="mb-8 uppercase font-bold md:text-xl text-slate-200">
        Your projects
      </h2>
      <div>
        <Button
          className="text-slate-400 bg-slate-700 py-2 px-4 rounded-md text-xs md:text-base hover:bg-slate-600 hover:text-slate-100"
          onClick={onStartAddProject}
        >
          + Add Project
        </Button>
      </div>
      <ul></ul>
    </aside>
  );
}
