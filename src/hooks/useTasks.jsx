import { useEffect, useState } from "react"
import createTask from "../services/createTask.service"
import deleteTask from "../services/deleteTask.service"
import toggleTask from "../services/toggleTask.service"
import updateTask from "../services/updateTask.service"

import { API_URL } from "../config"


export default function useTasks() {
  const [tasks, setTasks] = useState([])  
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(true)


  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(API_URL)
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
  }, [])

  const addTaskAction =  async (task) => {
    try {
      setIsLoading(true)
      await createTask(task)

      setError('')
      setTasks(prevState => [...prevState, task])

    } catch(e) {
      setError(e.message)
    } finally {
      setIsLoading(false)
    }
    
  }

  const deleteTaskAction = async (id) => {
    try {
      setIsLoading(true)
      await deleteTask(id)

      setError('')
      setTasks(prevState => prevState.filter(t => t.id !== id))

    } catch(e) {
      setError(e.message)
    } finally {
      setIsLoading(false)
    }
   
    
  }

  const toggleTaskAction = async (task) => {

    try {
      setIsLoading(true)
      const updatedTask = await toggleTask(task)

      setError('')
      setTasks(prevState => prevState.map(t => (
        t.id === task.id
          ? updatedTask
          : t
      )))
    }
    catch(e) {
      setError(e.message)
    }finally {
      setIsLoading(false)
    }
   
  }

  const updateTaskAction = async (task) => {

    try{
      setIsLoading(true)
      const updatedTask = await updateTask(task)

      setError('')
      setTasks(prevState => prevState.map(t => (
        t.id === task.id
          ? updatedTask
          : t
      )))
    }catch (e){
      setError(e.message)
    } finally {
      setIsLoading(false)
    }
  }

  const actions = {
    addTask: addTaskAction,
    deleteTask: deleteTaskAction,
    toggleTask: toggleTaskAction,
    updateTask: updateTaskAction
  }

  return [tasks, actions, isLoading, error]
}