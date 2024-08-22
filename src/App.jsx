import { useState } from "react";

import { NewProject } from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import { Sidebar } from "./components/Sidebar";

function App() {
  const [projects, setProjects] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  const handleStartAddProject = () => {
    setProjects((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  };

  const { selectedProjectId } = projects;

  let content;

  if (selectedProjectId === null) {
    content = <NewProject />;
  } else if (selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar onStartAddProject={handleStartAddProject} />
      {content}
    </main>
  );
  u;
}

export default App;
