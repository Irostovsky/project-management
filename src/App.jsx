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

  const cancelNewProjectFormHandler = () => {
    setProjectsState((prevState) => {
      return { ...prevState, selectedProjectId: undefined };
    });
  };

  let content;
  if (projectsState.selectedProjectId === null) {
    content = (
      <NewProject onCancelNewProjectForm={cancelNewProjectFormHandler} />
    );
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectsSelected onStartAddProject={handleStartAddProject} />;
  } else {
    content = "Show selected project TBC";
  }

  return (
    <main className=" h-screen my-8 flex gap-8">
      <ProjectsSidebar onStartAddProject={handleStartAddProject} />
      {content}
    </main>
  );
}

export default App;
