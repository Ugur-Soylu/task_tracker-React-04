
import Task from "./Task"

 function Tasks({tasks, onDelete, toggleDone}) {
  
  return (
    <div>
      {tasks.map((task) => (
        <Task key={task.id} task={task} onDelete={onDelete} toggleDone={toggleDone}/>
      ))}
    </div>
  );
}
export default Tasks;