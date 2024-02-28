import React, { useState } from "react";
import ProjectsSidebar from "./components/ProjectsSidebar";
import NewProject from "./components/NewProject";
import NoProjectsSelected from "./components/NoProjectsSelected";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
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

  const handleCancelAddProject = () => {
    setProjectsState((prevState) => {
      return { ...prevState, selectedProjectId: undefined };
    });
  };

  const handleDeleteSelectedProject = () => {
    setProjectsState((prevState) => {
      const selectedProjectId = prevState.selectedProjectId;
      const projects = prevState.projects;
      const newProjects = projects.filter(
        (project) => project.id !== selectedProjectId
      );
      return { projects: newProjects, selectedProjectId: undefined };
    });
  };

  const handleAddTask = (taskName) => {
    setProjectsState((prevState) => {
      const task = {
        id: Math.random(),
        name: taskName,
        projectId: prevState.selectedProjectId,
      };
      return { ...prevState, tasks: [task, ...prevState.tasks] };
    });
  };

  const handleDeleteTask = (taskId) => {
    setProjectsState((prevState) => {
      const newTasks = prevState.tasks.filter((task) => task.id !== taskId);
      return { ...prevState, tasks: newTasks };
    });
  };

  let content;
  if (projectsState.selectedProjectId === null) {
    content = (
      <NewProject onCancel={handleCancelAddProject} onAdd={handleAddProject} />
    );
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectsSelected onStartAddProject={handleStartAddProject} />;
  } else {
    const selectedProject = projectsState.projects.find(
      (item) => item.id === projectsState.selectedProjectId
    );
    const projectTasks = projectsState.tasks.filter(
      (task) => task.projectId === projectsState.selectedProjectId
    );
    content = (
      <SelectedProject
        project={selectedProject}
        tasks={projectTasks}
        onDelete={handleDeleteSelectedProject}
        onAddTask={handleAddTask}
        onDeleteTask={handleDeleteTask}
      />
    );
  }

  return (
    <main className=" h-screen flex gap-8">
      <ProjectsSidebar
        onStartAddProject={handleStartAddProject}
        projects={projectsState.projects}
        onSelectProject={handleSelectProject}
        selectedProjectId={projectsState.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;
