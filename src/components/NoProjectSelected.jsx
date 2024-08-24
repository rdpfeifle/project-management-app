import { useContext } from "react";
import { Context } from "../store/context";
import noProjectsImg from "../assets/no-projects.png";
import { Button } from "./Button";

export default function NoProjectSelected() {
  const { startAddProject } = useContext(Context);

  return (
    <div className="my-24 text-center w-2/3">
      <img
        alt="An empty task list"
        src={noProjectsImg}
        className="w-16 h-16 object-contain mx-auto"
      />
      <h2 className="mt-4 capitalize text-xl font-bold text-slate-500">
        No project selected
      </h2>
      <p className="mb-4 text-slate-400">
        Select an existing project or create a new one.
      </p>
      <p className="mt-8">
        <Button
          className="text-slate-400 bg-slate-700 py-2 px-4 rounded-md text-xs md:text-base hover:bg-slate-600 hover:text-slate-100"
          onClick={startAddProject}
        >
          Create new project
        </Button>
      </p>
    </div>
  );
}
