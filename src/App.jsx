import { useState } from "react";
import { v4 as uuid } from "uuid";
import { NewProject } from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import { Sidebar } from "./components/Sidebar";
import { ProjectDetails } from "./components/ProjectDetails";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [projects, setProjects] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });
  const uniqueId = uuid();
  const smallId = uniqueId.slice(0, 7);

  const { selectedProjectId } = projects;

  const handleSelectProject = (id) => {
    setProjects((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
  };

  const handleStartAddProject = () => {
    setProjects((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  };

  const handleCancelAddProject = () => {
    setProjects((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
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

  const handleDeleteProject = () => {
    setProjects((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter(
          (project) => project.id !== prevState.selectedProjectId
        ),
      };
    });
  };

  const handleAddTask = (text) => {
    setProjects((prevState) => {
      const newTask = {
        text: text,
        projectId: prevState.selectedProjectId,
        taskId: smallId,
      };
      return {
        ...prevState,
        tasks: [...prevState.tasks, newTask],
      };
    });
  };

  const handleDeleteTask = (id) => {
    setProjects((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.taskId !== id),
      };
    });
  };

  const selectedProject = projects.projects.find(
    (project) => project.id === selectedProjectId
  );

  let content = (
    <ProjectDetails
      project={selectedProject}
      onDelete={handleDeleteProject}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      tasks={projects.tasks}
    />
  );

  if (selectedProjectId === null) {
    content = (
      <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />
    );
  } else if (selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <Sidebar
          onStartAddProject={handleStartAddProject}
          projects={projects.projects}
          onSelectProject={handleSelectProject}
          selectedProjectId={projects.selectedProjectId}
        />
        {content}
      </main>
      <ToastContainer />
    </>
  );
  u;
}

export default App;
