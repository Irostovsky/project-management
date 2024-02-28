const Task = ({ task, onDelete }) => {
  const handleClick = (taskId) => {
    onDelete(taskId);
  };
  return (
    <div className="flex justify-between my-4">
      <p>{task.name}</p>
      <button
        className="text-stone-700 hover:text-red-500"
        onClick={() => handleClick(task.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default Task;
