import { Input } from "./Input";

export function NewProject() {
  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className="text-slate-800 hover:text-slate-950">
            Cancel
          </button>
        </li>
        <li>
          <button className="px-6 py-2 rounded-md bg-slate-800 text-slate-50 hover:bg-slate-950">
            Save
          </button>
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
