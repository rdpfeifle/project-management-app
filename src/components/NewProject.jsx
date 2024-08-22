import { Button } from "./Button";
import { Input } from "./Input";

export function NewProject() {
  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <Button className="text-slate-800 hover:text-slate-950">
            Cancel
          </Button>
        </li>
        <li>
          <Button className="px-6 py-2 rounded-md bg-slate-800 text-slate-50 hover:bg-slate-950">
            Save
          </Button>
        </li>
      </menu>
      <div>
        <Input label="Title" />
        <Input label="Description" isTextArea />
        <Input label="Due Date" />
      </div>
    </div>
  );
}
