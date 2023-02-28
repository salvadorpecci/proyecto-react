import { useState } from 'react'

// custom hooks
import useLocalStorage from './hooks/useLocalStorage'

// custom components
import CustomForm from './components/CustomForm'
import EditForm from './components/EditForm'
import TaskList from './components/TaskList'
import useTasks from './hooks/useTasks'

function App() {
  const [tasks, actions, isLoading, error] = useTasks();
  const { addTask, deleteTask, toggleTask, updateTask  } = actions;
   
  const [previousFocusEl, setPreviousFocusEl] = useState(null);
  const [editedTask, setEditedTask] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const closeEditMode = () => {
    setIsEditing(false);
    previousFocusEl.focus();
  }

  const enterEditMode = (task) => {
    setEditedTask(task);
    setIsEditing(true);
    setPreviousFocusEl(document.activeElement);
  }

  return (
    <div className="container">
      <header>
        <h1>My Task List</h1>
      </header>
      {
        isEditing && (
          <EditForm
            editedTask={editedTask}
            updateTask={() => { 
              updateTask();
              closeEditMode();
            }}
            closeEditMode={closeEditMode}
          />
        )
      }
      <CustomForm addTask={addTask}/>
      {tasks && (
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

export default App
