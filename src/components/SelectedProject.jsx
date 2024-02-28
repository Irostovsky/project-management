import Tasks from "./Tasks";

const SelectedProject = ({
  project,
  tasks,
  onDelete,
  onAddTask,
  onDeleteTask,
}) => {
  const formattedDate = new Date(project.dueDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  return (
    <div className="mt-16 w-[35rem] ">
      <header className="pb-4 mb-4 border-b-2 border-stone-3 00">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-stone-600 mb-2">
            {project.title}
          </h1>
          <button
            onClick={onDelete}
            className="text-stone-600 hover:text-stone-950"
          >
            Delete
          </button>
        </div>
        <p className="mb-4 text-stone-400">{formattedDate}</p>
        <p className="text-stone-600 whitespace-pre-wrap">
          {project.description}
        </p>
      </header>
      <Tasks tasks={tasks} onAddTask={onAddTask} onDeleteTask={onDeleteTask} />
    </div>
  );
};

export default SelectedProject;
