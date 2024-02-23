import Input from "./Input.jsx";
import React, { useRef } from "react";
import Modal from "./Modal.jsx";

const NewProject = ({ onCancel, onAdd }) => {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();
  const errorModal = useRef();

  function handleSave() {
    const enteredTitle = title.current.value.trim();
    const enteredDescription = description.current.value.trim();
    const enteredDueDate = dueDate.current.value.trim();
    if (!enteredTitle || !enteredDescription || !enteredDueDate) {
      errorModal.current.open();
      return;
    }
    const project = {
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    };
    onAdd(project);
  }

  return (
    <>
      <Modal ref={errorModal} buttonCaption="Close">
        <h2 className="text-xl font-bold text-stone-700 my-4 ">
          Invalid Input
        </h2>
        <p className="text-stone-600 mb-4 ">
          Oops ... looks like you forgot to enter a value.
        </p>
        <p className="text-stone-600 mb-4 ">
          Please make sure you provided a valid value for every input field.
        </p>
      </Modal>
      <div className="w-[35rem] mt-16 ">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              onClick={onCancel}
              className="text-stone-800 hover:text-stone-950 "
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              onClick={handleSave}
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input ref={title} label="Title" type="text" />
          <Input ref={description} label="Description" textarea />
          <Input ref={dueDate} label="Due Date" type="date" />
        </div>
      </div>
    </>
  );
};

export default NewProject;
