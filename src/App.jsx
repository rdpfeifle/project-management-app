import { useContext } from "react";
import { NewProject } from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import { Sidebar } from "./components/Sidebar";
import { ProjectDetails } from "./components/ProjectDetails";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Context } from "./store/context";

function App() {
  const { projects, selectedProjectId } = useContext(Context);

  const selectedProject = projects.find(
    (project) => project.id === selectedProjectId
  );

  let content = <ProjectDetails project={selectedProject} />;

  if (selectedProjectId === null) {
    content = <NewProject />;
  } else if (selectedProjectId === undefined) {
    content = <NoProjectSelected />;
  }

  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <Sidebar />
        {content}
      </main>
      <ToastContainer />
    </>
  );
  u;
}

export default App;
