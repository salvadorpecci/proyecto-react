import TaskItem from './TaskItem'

const TaskList = ({ tasks, deleteTask, toggleTask, enterEditMode }) => {
  if(!Array.isArray(tasks)) {
    return <h2>{tasks.message}</h2>
  }
 /*Falta ordenar por fecha */
  return (
    <ul className='tasks'>
     
      {tasks.map(task => {
        return <TaskItem
          key={crypto.randomUUID()}
          task={task}
          deleteTask={deleteTask}
          toggleTask={toggleTask}
          enterEditMode={enterEditMode}
        />
      })
      }
    </ul>
  )
}
export default TaskList