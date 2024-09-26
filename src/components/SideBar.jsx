import Btn from "./Btn";

export default function SideBar({ onStart, projects, onSelectProj, selectedprojid }) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-stone-200">
        Your Projects
      </h2>
      <div>
        <Btn onClick={onStart}> + Add Projects </Btn>
      </div>
      <ul className="mt-8">
        {projects.map((project) => {
          let cssClass = "w-full text-left px-2 py-2 rounded-md my-1 hover:text-stone-200 hover:bg-stone-800";
          if (project.id === selectedprojid) {
            cssClass += ' bg-stone-800 text-stone-200';
          } else {
            cssClass += ' text-stone-400';
          }
          return (
            <li key={project.id}> {/* Use project.id as the key */}
              <button onClick={() => onSelectProj(project.id)} className={cssClass}>
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
