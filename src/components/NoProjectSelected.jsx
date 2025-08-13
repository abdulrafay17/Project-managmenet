import { useState } from 'react'
import noproject from '../assets/no-projects.png'
import Task from "./task.jsx";

export default function NoProjectSelected({visible, selectedProject, seen, setSeen, setProject, project}) {

    

    function onClick() {
        visible(true);
    }

    return seen ? (
        <Task selectedProject={selectedProject} setProject={setProject} project={project} setSeen={setSeen}/>
    ) : (
        <>
            <div className="mt-24 text-center w-2/3">
                <img src={noproject} alt="Some Image" className='w-16 h-16 object-container mx-auto' />
                <h2 className='text-xl font-bold text-stone-500 my-4'>No Project Selected</h2>
                <p className='text-stone-400 mb-4'>Select a project or get started with a new one</p>
                <p className='mt-8'>
                    <button onClick={onClick} className='px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100'>Create new Project</button>
                </p>
            </div>
        </>
    ) 
}