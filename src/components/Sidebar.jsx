import { Button } from "./Button";

export function Sidebar() {
  return (
    <aside className="bg-black">
      <h2 className="uppercase font-bold text-2xl text-white">Your projects</h2>
      <div>
        <Button className="text-gray-600 bg-gray-300 py-2 px-3 rounded-md">
          + Add Project
        </Button>
      </div>
      <ul></ul>
    </aside>
  );
}
