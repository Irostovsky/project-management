import NewTask from "./NewTask";
import Task from "./Task";

const Tasks = ({ tasks, onAddTask, onDeleteTask }) => {
  let content = (
    <p className="text-stone-800 my-4 ">
      This project does not have any tasks yet.
    </p>
  );
  if (tasks.length) {
    content = (
      <ul className="p-4 mt-8 rounded-md bg-stone-100 ">
        {tasks.map((task) => (
          <li key={task.id}>
            <Task task={task} onDelete={onDeleteTask} />
          </li>
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
