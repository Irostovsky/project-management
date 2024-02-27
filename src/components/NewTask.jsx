import { useState } from "react";

const NewTask = ({ onAdd }) => {
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSave = () => {
    onAdd(name);
    setName("");
  };

  return (
    <div className="flex items-center gap-4">
      <input
        label="Name"
        type="text"
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
        onChange={handleChange}
        value={name}
      />
      <button
        onClick={handleSave}
        className="text-stone-700 hover:text-stone-950 "
      >
        Save
      </button>
    </div>
  );
};

export default NewTask;
