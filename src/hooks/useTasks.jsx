import { useContext, useEffect, useState } from "react"
import createTask from "../services/createTask.service"
import deleteTask from "../services/deleteTask.service"
import toggleTask from "../services/toggleTask.service"
import updateTask from "../services/updateTask.service"
import moment from 'moment'

import { API_URL } from "../config"
import { AuthContext, authReducer } from "../contexts/Auth"


export default function useTasks() {
  const [tasks, setTasks] = useState([])
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const { authState, authDispatch } = useContext(AuthContext)
  const token = authState.user.token


  function logout () {
    authDispatch({ type: 'LOGOUT', payload: null })
  }

  useEffect(() => {
    async function getData() {

      const response = await fetch(`${API_URL}/task`, {
        headers: {
          Authorization: `Bearer ${authState.user.token}`
        }
      })

      return await response.json()
    }
    getData()
    .then(data => {
      if (data?.message !== 'Unauthorized request') {
          setTasks(data.map(task => {return { ...task, deadline: task.deadline == null ? null : moment.utc(task.deadline).local().format('YYYY-MM-DD') }}))
        } else {
          logout()
        }
      })
      .catch(err => setError(err.message))
      .finally(() => setIsLoading(false))
  }, [])

  const addTaskAction = async (task) => {
    try {
      setIsLoading(true)
      const createdTask = await createTask(token, task)
      
      if (createdTask?.message === 'Unauthorized request') {
        logout()
        return
      }

      createdTask.task.deadline = createdTask.task.deadline == null ? null : moment.utc(task.deadline).local().format('YYYY-MM-DD')

      setError('')
      setTasks(prevState => [...prevState, createdTask.task])

    } catch (e) {
      setError(e.message)
    } finally {
      setIsLoading(false)
    }

  }

  const deleteTaskAction = async (id) => {
    try {
      setIsLoading(true)
      const deletedTask = await deleteTask(token, id)

      if (deletedTask?.message === 'Unauthorized request') {
        logout()
        return
      }

      setError('')
      setTasks(prevState => prevState.filter(t => t._id !== id))

    } catch (e) {
      setError(e.message)
    } finally {
      setIsLoading(false)
    }


  }

  const toggleTaskAction = async (task) => {

    try {
      setIsLoading(true)
      const updatedTask = await toggleTask(token, task)

      if (updatedTask?.message === 'Unauthorized request') {
        logout()
        return
      }

      updatedTask.deadline = updatedTask.deadline == null ? null : moment.utc(task.deadline).local().format('YYYY-MM-DD')

      setError('')
      setTasks(prevState => prevState.map(t => (
        t._id === task._id
          ? updatedTask
          : t
      )))
    }
    catch (e) {
      setError(e.message)
    } finally {
      setIsLoading(false)
    }

  }

  const updateTaskAction = async (task) => {

    try {
      setIsLoading(true)
      
      const updatedTask = await updateTask(token, task)

      if (updatedTask?.message === 'Unauthorized request') {
        logout()
        return
      }

      updatedTask.deadline = updatedTask.deadline == null ? null : moment.utc(task.deadline).local().format('YYYY-MM-DD')

      setError('')
      setTasks(prevState => prevState.map(t => (
        t._id === updatedTask._id
        ? updatedTask
        : t
      )))
    } catch (e) {
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