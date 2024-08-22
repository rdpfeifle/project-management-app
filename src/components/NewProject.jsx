import { useRef } from "react";
import { Button } from "./Button";
import Input from "./Input";

export function NewProject({ onAdd }) {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dueDateRef = useRef();

  const handleSave = () => {
    const enteredTitle = titleRef.current.value;
    const enteredDescription = descriptionRef.current.value;
    const enteredDueDate = dueDateRef.current.value;

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  };

  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <Button className="text-slate-800 hover:text-slate-950">
            Cancel
          </Button>
        </li>
        <li>
          <Button
            className="px-6 py-2 rounded-md bg-slate-800 text-slate-50 hover:bg-slate-950"
            onClick={handleSave}
          >
            Save
          </Button>
        </li>
      </menu>
      <div>
        <Input ref={titleRef} type="text" label="Title" />
        <Input ref={descriptionRef} label="Description" isTextArea />
        <Input ref={dueDateRef} type="date" label="Due Date" />
      </div>
    </div>
  );
}
