import React from "react";
import ProjectsSidebar from "./components/ProjectsSidebar";
import NewProject from "./components/NewProject";
import NoProjectsSelected from "./components/NoProjectsSelected";

function App() {
  return (
    <main className=" h-screen my-8 flex gap-8">
      <ProjectsSidebar />
      {/* <NewProject /> */}
      <NoProjectsSelected />
    </main>
  );
}

export default App;
