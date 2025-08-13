

export default function Task({selectedProject, setProject, setSeen, project}) {

    function onRemove(id) {
        setProject(prev => prev.filter(item=> item.id !== id))
        setSeen(false);
    }

    function addTask(e) {
        e.preventDefault();
        const textInput = e.target.elements.task.value.trim();
        if (!textInput) return;

        setProject((prev)=> prev.map((project)=> project.id === selectedProject.id ? {...project, task: [...(project.task || []), textInput] } : project))
        e.target.reset();
    }

    return (
        <>
        <div className="w-[50rem] mt-16">
            <div className="flex items-center justify-between"><h1 className="font-bold uppercase md:text-4xl text-stone-700">{selectedProject.title}</h1><button onClick={()=> onRemove(selectedProject.id)} className="px-6 py-2 rounded-md bg-stone-50 text-stone-900 hover:text-stone-50 hover:bg-stone-950">Delete</button></div>
            <h3 className="text-md text-stone-400">{selectedProject.dueDate}</h3>
            <h2 className="mt-8 mb-4 text-md text-stone-600 font-normal">
                {selectedProject.description}
            </h2>
            <hr className="bg-stone-400 h-1 border-0 mb-7" />
            <h1 className="font-bold md:text-2xl text-stone-700">TASKS</h1>
            <form onSubmit={addTask} className="flex items-center gap-2"><input type="text" name="task" className=" h-8 bg-stone-300 w-64 outline-none" /><button type="submit" className="px-6 py-2 rounded-md bg-stone-50 font-semibold text-stone-900 hover:text-stone-50 hover:bg-stone-950">Add Task</button></form>
            <ul className="mt-16 pl-6">
                {project.find(p => p.id === selectedProject.id)
                    ?.task?.map((task, i) => (
                    <li key={i} className="font-semibold flex items-center justify-between">
                        <p>{task}</p>
                        <button onClick={() => setProject(prev => prev.map(project => project.id === selectedProject.id ? { ...project, task: project.task.filter((_, index) => index !== i)} : project))} className="px-6 py-2 rounded-md bg-stone-50 font-normal text-stone-900 hover:text-stone-50 hover:bg-stone-950">
                        Clear
                        </button>
                    </li>
                ))}
            </ul>
        </div>
        </>
    )
}

