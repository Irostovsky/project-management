import React, { useState } from "react";
import ProjectsSidebar from "./components/ProjectsSidebar";
import NewProject from "./components/NewProject";
import NoProjectsSelected from "./components/NoProjectsSelected";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  const handleStartAddProject = () => {
    setProjectsState((prevState) => {
      return { ...prevState, selectedProjectId: null };
    });
  };

  const handleAddProject = (project) => {
    project.id = Math.random();
    setProjectsState((prevState) => {
      return {
        ...prevState,
        projects: [...prevState.projects, project],
        selectedProjectId: project.id,
      };
    });
  };

  const handleSelectProject = (projectId) => {
    setProjectsState((prevState) => {
      return { ...prevState, selectedProjectId: projectId };
    });
  };

  const cancelNewProjectFormHandler = () => {
    setProjectsState((prevState) => {
      return { ...prevState, selectedProjectId: undefined };
    });
  };

  let content;
  if (projectsState.selectedProjectId === null) {
    content = (
      <NewProject
        onCancelNewProjectForm={cancelNewProjectFormHandler}
        onAddProject={handleAddProject}
      />
    );
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectsSelected onStartAddProject={handleStartAddProject} />;
  } else {
    const selectedProject = projectsState.projects.find(
      (item) => item.id === projectsState.selectedProjectId
    );
    content = <b>{selectedProject.title}</b>;
  }

  return (
    <main className=" h-screen my-8 flex gap-8">
      <ProjectsSidebar
        onStartAddProject={handleStartAddProject}
        projects={projectsState.projects}
        onSelectProject={handleSelectProject}
      />
      {content}
    </main>
  );
}

export default App;
