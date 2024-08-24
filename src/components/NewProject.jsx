import { useRef, useContext } from "react";
import { Context } from "../store/context";
import { Button } from "./Button";
import Input from "./Input";
import { toast } from "react-toastify";

export function NewProject() {
  const { addProject, cancelAddProject } = useContext(Context);
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dueDateRef = useRef();

  const handleSave = () => {
    const enteredTitle = titleRef.current.value;
    const enteredDescription = descriptionRef.current.value;
    const enteredDueDate = dueDateRef.current.value;

    const isEmptyInput =
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate.trim() === "";

    if (isEmptyInput) {
      toast.error(
        "Please, make sure you provide a valid value for every input field."
      );
      return;
    }

    addProject({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  };

  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <Button
            className="text-slate-800 hover:text-slate-950"
            onClick={cancelAddProject}
          >
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
