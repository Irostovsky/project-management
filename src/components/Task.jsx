const Task = ({ task, onDelete }) => {
  const handleClick = (taskId) => {
    onDelete(taskId);
  };
  return (
    <div className="flex items-center justify-between">
      <p>{task.name}</p>
      <button
        className="text-stone-700 hover:text-stone-950"
        onClick={() => handleClick(task.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default Task;
