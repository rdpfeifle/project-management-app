import { useState, useContext } from "react";
import { Context } from "../store/context";
import { Button } from "./Button";
import { toast } from "react-toastify";

export function NewTask() {
  const [enteredTask, setEnteredTask] = useState("");
  const { addTask, selectedProjectId } = useContext(Context);

  const handleChange = (e) => {
    const value = e.target.value;
    value.trim() !== "" && setEnteredTask(value);
  };

  const handleClick = () => {
    if (enteredTask.trim() === "") {
      toast.error("Task cannot be empty.");
      return;
    }

    addTask(enteredTask, selectedProjectId);
    setEnteredTask("");
  };

  return (
    <div className="flex items-center gap-4">
      <input
        type="text"
        className="py-1 px-2 w-64 rounded-sm bg-slate-200"
        onChange={handleChange}
        value={enteredTask}
      />
      <Button
        className="text-slate-700 hover:text-slate-950"
        onClick={handleClick}
      >
        Add Task
      </Button>
    </div>
  );
}
