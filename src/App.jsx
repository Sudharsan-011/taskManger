import { useState } from "react";
import NewProject from "./components/NewProject.jsx";
import NoProject from "./components/NoProject.jsx";
import SideBar from "./components/SideBar.jsx";
import SelectedProj from "./components/SelectedProj.jsx";

function App() {
  const [projState, setProjState] = useState({
    selectedProj: undefined,
    projects: [],
    tasks:[],
  });

  function handleAddTask(text ){
    setProjState((prevState)=>{
      const taskId=Math.random();
      const newTask={
        text:text,
        projectId:prevState.selectedProj,
        id:taskId
      };
      return{
        ...prevState,
        // selectedProj:undefined,
        tasks:[newTask,...prevState.tasks]
      }
    })
    
  }
  function handleDeleteTask(id){
    setProjState((prevVal) => {
      return {
        ...prevVal,

      tasks: prevVal.tasks.filter(
          (task) => task.id !== id,
         
        ),
        
      };
    });
  }

  function addProjects() {
    setProjState((prevState) => {
      return { ...prevState, selectedProj: null };
    });
  }

  function cancelAddProj() {
    setProjState((prevState) => {
      return { ...prevState, selectedProj: undefined };
    });
  }

  function handleAddProject(projectData) {
    setProjState((prevVal) => {
      const projId = Math.random();
      const newProject = {
        ...projectData,
        id: projId,
      };
      return {
        ...prevVal,
        selectedProj: undefined,
        projects: [...prevVal.projects, newProject],
      };
    });
  }

 

  // Fix: Corrected the usage of projState.selectedProj
  const selectedProj = projState.projects.find(
    (project) => project.id === projState.selectedProj
  );

  let content = <SelectedProj project={selectedProj}  onDelete={handleDeleteProject} onAddTask={handleAddTask} onDeleteTask={handleDeleteTask} tasks={projState.tasks}  />;
  if (projState.selectedProj === null) {
    content = <NewProject onAdd={handleAddProject} cancel={cancelAddProj} />;
  } else if (projState.selectedProj === undefined) {
    content = <NoProject onStart={addProjects} />;
  }

  function handleSelectProject(id) {
    setProjState((prevState) => {
      return { ...prevState, selectedProj: id };
    });
  }

  function handleDeleteProject() {
    setProjState((prevVal) => {
      return {
        ...prevVal,
        selectedProj: undefined,
        projects : prevVal.projects.filter(
          (project) => project.id !== prevVal.selectedProj,
         
        ),
        
      };
    });
  }

  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <SideBar
          onSelectProj={handleSelectProject}
          onStart={addProjects}
          projects={projState.projects}
         selectedprojid={projState.selectedProj}
        />
        {content}
      </main>
    </>
  );
}

export default App;
