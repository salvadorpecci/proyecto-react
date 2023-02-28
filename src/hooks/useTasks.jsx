import { useEffect, useState } from "react"
import createTask from "../services/createTask.service"
import deleteTask from "../services/deleteTask.service"
import toggleTask from "../services/toggleTask.service"


export default function useTasks() {
  const [tasks, setTasks] = useState([])  
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(true)


  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch('http://localhost:8080/todos')
        const data = await response.json()

        setError('')
        setIsLoading(false)

        setTasks(data)

      }
      catch (error) {
        setError(error.message)
      }
    }
    getData()
  }

  )
  const addTaskAction =  async (task) => {
    await createTask(task)
    setTasks(prevState => [...prevState, task])
    
  }

  const deleteTaskAction = async (id) => {
    await deleteTask(id)
    setTasks(prevState => prevState.filter(t => t.id !== id));
  }

  const toggleTaskAction = async (task) => {
   await toggleTask(task)
    setTasks(prevState => prevState.map(t => (
      t.id === task.id
        ? { ...t, checked: !t.checked }
        : t
    )))
  }

  const updateTask = (task) => {
    setTasks(prevState => prevState.map(t => (
      t.id === task.id
        ? { ...t, name: task.name }
        : t
    )))
  }

  const actions = {
    addTask: addTaskAction,
    deleteTask: deleteTaskAction,
    toggleTask: toggleTaskAction,
    updateTask
  }

  return [tasks, actions, isLoading, error]
}