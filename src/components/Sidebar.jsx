import { Button } from "./Button";

export function Sidebar({
  onStartAddProject,
  projects,
  onSelectProject,
  selectedProjectId,
}) {
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
      <ul className="mt-8 space-y-1">
        {projects.map((project) => {
          let cssClasses =
            "px-2 py-1 w-full text-left rounded-sm hover:text-slate-200 hover:bg-slate-800";

          if (project.id === selectedProjectId) {
            cssClasses += " bg-slate-800 text-slate-200";
          } else {
            cssClasses += " text-slate-400";
          }

          return (
            <li key={project.id}>
              <Button
                className={cssClasses}
                onClick={() => onSelectProject(project.id)}
              >
                {project.title}
              </Button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
