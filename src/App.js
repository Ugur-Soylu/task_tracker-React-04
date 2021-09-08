import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState } from "react";
import { initialState } from "./store/initialStates";
import CreateTask from './components/CreateTask';


function App() {
  const [tasks, setTasks] = useState(initialState);
  const[isTaskBarShowed, setisTaskBarShowed]=useState(false)

  //create a task
const onCreate = (task) => {
  const id = Date.now();
  const newTask = {id, ...task}
  setTasks((prevState)=> [...prevState, newTask])
}

  //delete a task
const onDelete = (deletedItemId)=> setTasks(tasks.filter((task)=> task.id !== deletedItemId))

  //toggle done
const toggleDone = (id)=>{
  setTasks(
    tasks.map((task)=> 
    task.id=== id ? {...task, isDone: !task.isDone} : task)
  )
}

  //toogle show and toidentifier
  const toggleShow = ()=> setisTaskBarShowed(prevState => !prevState)
  return (
    <div className="container">
      <Header title = {"Task Tracker"} isTaskBarShowed={isTaskBarShowed} toggleShow={toggleShow}/>
     { isTaskBarShowed && <CreateTask onCreate={onCreate}/>}
      {tasks.length > 0 ? (
      <Tasks tasks={tasks} onDelete = {onDelete} toggleDone={toggleDone}/>
      ):(
      <p>No Task to show</p>
      )}
      </div>
  );
}

export default App;