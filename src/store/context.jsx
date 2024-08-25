import { createContext, useReducer } from "react";
import { v4 as uuid } from "uuid";

export const Context = createContext({
  selectedProjectId: undefined,
  projects: [],
  selectProject: () => {},
  startAddProject: () => {},
  cancelAddProject: () => {},
  addProject: () => {},
  deleteProject: () => {},
  addTask: () => {},
  deleteTask: () => {},
});

function projectsReducer(state, action) {
  switch (action.type) {
    case "SELECT_PROJECT":
      return {
        ...state,
        selectedProjectId: action.selectedProjectId,
      };
    case "START_ADD_PROJECT":
      return {
        ...state,
        selectedProjectId: null,
      };
    case "CANCEL_ADD_PROJECT":
      return {
        ...state,
        selectedProjectId: undefined,
      };
    case "ADD_PROJECT":
      const newProject = {
        ...action.projectData,
        id: action.id,
        tasks: [],
      };
      return {
        ...state,
        selectedProjectId: undefined,
        projects: [...state.projects, newProject],
      };
    case "DELETE_PROJECT":
      return {
        ...state,
        selectedProjectId: undefined,
        projects: state.projects.filter(
          (project) => project.id !== state.selectedProjectId
        ),
      };
    case "ADD_TASK":
      const newTask = {
        text: action.text,
        taskId: action.taskId,
      };
      return {
        ...state,
        projects: state.projects.map((project) =>
          project.id === action.selectedProjectId
            ? { ...project, tasks: [...project.tasks, newTask] }
            : project
        ),
      };
    case "DELETE_TASK":
      return {
        ...state,
        projects: state.projects.map((project) =>
          project.id === action.selectedProjectId
            ? {
                ...project,
                tasks: project.tasks.filter(
                  (task) => task.taskId !== action.taskId
                ),
              }
            : project
        ),
      };
    default:
      throw new Error(`The action type ${action.type} wasn't handled.`);
  }
}

export function ContextProvider({ children }) {
  const [state, dispatch] = useReducer(projectsReducer, {
    projects: [],
    tasks: [],
  });

  const uniqueId = uuid();
  const smallId = uniqueId.slice(0, 7);

  const handleSelectProject = (id) => {
    dispatch({ type: "SELECT_PROJECT", selectedProjectId: id });
  };

  const handleStartAddProject = () => {
    dispatch({ type: "START_ADD_PROJECT" });
  };

  const handleCancelAddProject = () => {
    dispatch({ type: "CANCEL_ADD_PROJECT" });
  };

  const handleAddProject = (projectData) => {
    dispatch({
      type: "ADD_PROJECT",
      projectData,
      id: smallId,
    });
  };

  const handleDeleteProject = () => {
    dispatch({
      type: "DELETE_PROJECT",
    });
  };

  const handleAddTask = (text, projectId) => {
    dispatch({
      type: "ADD_TASK",
      selectedProjectId: projectId,
      taskId: smallId,
      text,
    });
  };

  const handleDeleteTask = (projectId, taskId) => {
    dispatch({
      type: "DELETE_TASK",
      selectedProjectId: projectId,
      taskId: taskId,
    });
  };

  const contextValue = {
    selectedProjectId: state.selectedProjectId,
    projects: state.projects,
    selectProject: handleSelectProject,
    startAddProject: handleStartAddProject,
    cancelAddProject: handleCancelAddProject,
    addProject: handleAddProject,
    deleteProject: handleDeleteProject,
    addTask: handleAddTask,
    deleteTask: handleDeleteTask,
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
}
