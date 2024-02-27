import NewTask from "./NewTask";

const Tasks = ({ tasks, onAddTask }) => {
  let content = (
    <p className="text-stone-800 my-4 ">
      This project does not have any tasks yet.
    </p>
  );
  if (tasks.length) {
    content = (
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.name}</li>
        ))}
      </ul>
    );
  }
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <NewTask onAdd={onAddTask} />
      {content}
    </section>
  );
};

export default Tasks;