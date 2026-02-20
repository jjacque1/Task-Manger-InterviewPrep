import { useState } from "react"
import TaskForm from "./components/TaskForm"

const STATUS = {
  PENDING: "pending",
  In_PROGRESS: "in-progress",
  DONE : "done", 
}

export default function App() {

  const [Tasks, setTasks] = useState([])

  function addTask(title) {
  const newTask = {
    id: Date.now(),
    title: title,
    status : STATUS.PENDING,
  }

  setTasks((prevTasks) => [...prevTasks, newTask])
}

  return (
    <div>
      <TaskForm></TaskForm>
    </div>
  )
}
