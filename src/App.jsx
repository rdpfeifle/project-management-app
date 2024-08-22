import { useState } from "react";
import { v4 as uuid } from "uuid";
import { NewProject } from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import { Sidebar } from "./components/Sidebar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [projects, setProjects] = useState({
    selectedProjectId: undefined,
    projects: [],
  });
  const uniqueId = uuid();
  const smallId = uniqueId.slice(0, 7);

  const { selectedProjectId } = projects;

  const handleStartAddProject = () => {
    setProjects((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  };

  const handleAddProject = (projectData) => {
    setProjects((prevState) => {
      const newProject = {
        ...projectData,
        id: smallId,
      };
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  };

  let content;

  if (selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} />;
  } else if (selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <Sidebar
          onStartAddProject={handleStartAddProject}
          projects={projects.projects}
        />
        {content}
      </main>
      <ToastContainer />
    </>
  );
  u;
}

export default App;
