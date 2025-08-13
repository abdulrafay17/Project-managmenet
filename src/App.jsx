import ProjectsSidebar from "./components/ProjectSidebar";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import { useState } from "react";

function App() {
  const [showNewProject, setShowNewProject] = useState(false);
  const [project, setProject] = useState([]);

  const [selectedProject, setSelectedProject] = useState();
  const [seen, setSeen] = useState(false)

  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <ProjectsSidebar
          visible={setShowNewProject}
          projects={project}
          setSelectedProject={setSelectedProject}
          setSeen={setSeen}
        />
        {showNewProject ? (
          <NewProject 
            visible={setShowNewProject}
            setProject={setProject}
          />
        ) : (
          <NoProjectSelected selectedProject={selectedProject}
            visible={setShowNewProject} seen={seen} setSeen={setSeen} setProject={setProject} project={project}
          />
        )}
      </main>
    </>
  );
}

export default App;
