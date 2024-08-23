import { useState } from "react";
import { Button } from "./Button";

export function NewTask({ onAdd }) {
  const [enteredTask, setEnteredTask] = useState();

  const handleChange = (e) => {
    setEnteredTask(e.target.value);
  };

  const handleClick = () => {
    onAdd(enteredTask);
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
