import Input from "./input.jsx"
import { useRef, useState, useEffect } from "react";


import Modal from "./modal.jsx";

let id = 0;

export default function NewProject({ visible, setProject}) {
  const [open, setOpen] = useState(false);

  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave() {
    const newProject = { 
      id: ++id,
      title: title.current.value,
      description: description.current.value,
      dueDate: dueDate.current.value,
    };

    if (!title.current.value || !description.current.value || !dueDate.current.value) {
      setOpen(true);
      return;
    }

    setProject(prev => [...prev, newProject]);
    visible(false);
  }

  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li><button onClick={() => visible(false)}>Cancel</button></li>
        <li><button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950" onClick={handleSave}>Save</button></li>
      </menu>
      {open && 
        <Modal open={setOpen}>
            <h2 className="text-xl font-bold text-stone-500 my-4">Invalid Input</h2>
            <p className="text-stone-400 mb-4">Ooops... look like you forgot to enter a value.</p>
            <p className="text-stone-400 mb-4">Please make sure you provide valid value for every input field. </p>
        </ Modal>
      }
      <Input type="text" label="Title" ref={title}/>
      <Input label="Description" textarea ref={description}/>
      <Input type="date" label="Due Date" ref={dueDate}/>
    </div>
  );
}
