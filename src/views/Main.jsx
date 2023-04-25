import { useState } from 'react'

import CustomForm from '../components/CustomForm'
import EditForm from '../components/EditForm'
import TaskList from '../components/TaskList'
import useTasks from '../hooks/useTasks'

function Main() {
  const [tasks, actions, isLoading, error] = useTasks();
  const { addTask, deleteTask, toggleTask, updateTask  } = actions;
   
  const [previousFocusEl, setPreviousFocusEl] = useState(null);
  const [editedTask, setEditedTask] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const closeEditMode = () => {
    setIsEditing(false)
    previousFocusEl.focus()
  }

  const enterEditMode = (task) => {
    setEditedTask(task)
    setIsEditing(true)
    setPreviousFocusEl(document.activeElement);
  }

  return (
    <div className="container">
      {
        isEditing && (
          <EditForm
            editedTask={editedTask}
            updateTask={(updatedTask) => { 
              updateTask(updatedTask)
              closeEditMode()
            }}
            closeEditMode={closeEditMode}
          />
        )
      }
      <CustomForm addTask={addTask}/>

      {
        error.length !== 0 && <h1>{error}</h1>
      }

      {
        isLoading && <h1>Loading...</h1>
      }

      {!isLoading && error.length === 0 && tasks && (
        <TaskList
          tasks={tasks}
          deleteTask={deleteTask}
          toggleTask={toggleTask}
          enterEditMode={enterEditMode}
        />
      )}
    </div>
  )
}

export default Main
