import { useState } from "react"

const STATUS = {
  PENDING: "pending",
  In_PROGRESS: "in-progress",
  Done : "done", 
}

function addTask(title) {
  const newTask = {
    id: Date.now(),
    title: title,
    status : STATUS.PENDING,
  }

  setTasks((prevTask) => [...prevTask, newTask])
}

export default function App() {

  const [tasks, setTasks] = useState([])

  return (
    <div>
      <h1>Task manager App</h1>
    </div>
  )
}
