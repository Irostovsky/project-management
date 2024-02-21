import Input from "./Input.jsx";
import React, { useRef, useState } from "react";

const NewProject = ({ onCancelNewProjectForm, onAddProject }) => {
  const [titleInvalid, setTitleInvalid] = useState(false);
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSubmit() {
    if (!title.current.value) {
      setTitleInvalid(true);
      return;
    }
    const project = {
      title: title.current.value,
      description: description.current.value,
      dueDate: dueDate.current.value,
    };
    onAddProject(project);
  }

  return (
    <div className="w-[35rem] mt-16 ">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button
            onClick={onCancelNewProjectForm}
            className="text-stone-800 hover:text-stone-950 "
          >
            Cancel
          </button>
        </li>
        <li>
          <button
            onClick={handleSubmit}
            className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
          >
            Save
          </button>
        </li>
      </menu>
      <div>
        <Input ref={title} label="Title" invalid={titleInvalid} />
        <Input ref={description} label="Description" textarea />
        <Input ref={dueDate} label="Due Date" />
      </div>
    </div>
  );
};

export default NewProject;
