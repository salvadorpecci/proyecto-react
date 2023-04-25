import { useState, useEffect, useRef } from 'react';

// library imports
import { CheckIcon, CalendarIcon } from '@heroicons/react/24/solid'

const EditForm = ({ editedTask, updateTask, closeEditMode }) => {
  const [updatedTaskName, setUpdatedTaskName] = useState(editedTask.name);
  const [updatedTaskDate, setUpdatedTaskDate] = useState(editedTask.deadline ?? '')
  const inputRef = useRef(null)

  useEffect(()=> {
    const closeModalIfEscaped = (e) => {
      e.key === "Escape" && closeEditMode();
    }

    window.addEventListener('keydown', closeModalIfEscaped)

    return () => {
      window.removeEventListener('keydown', closeModalIfEscaped)
    }
  }, [closeEditMode])

  const handleFormSubmit = (e) => {
    e.preventDefault();
    updateTask({...editedTask, name: updatedTaskName, deadline: updatedTaskDate.length === 0 ? null : updatedTaskDate})
  }

  return (
    <div
      role="dialog"
      aria-labelledby="editTask"
      onClick={(e) => {e.target === e.currentTarget && closeEditMode()}}
      >
      <form
        className="todo"
        onSubmit={handleFormSubmit}
        >
        <div className="wrapper">
          <input
            type="text"
            id="editTask"
            className="input"
            value={updatedTaskName}
            onInput={(e) => setUpdatedTaskName(e.target.value)}
            required
            autoFocus
            maxLength={60}
            placeholder="Update Task"
          />
          <label
            htmlFor="editTask"
            className="label"
          >Update Task</label>
          <input
            className='input'
            type='date'
            id='date-edit'
            value={updatedTaskDate}
            defaultValue={updatedTaskDate}
            onChange={e => setUpdatedTaskDate(e.target.value)}   
            ref={inputRef}
            style={{
              display: 'none'
            }}
        />
        </div>

        <label
          className='btn'
          arie-label='Add Date'
          onClick={() => inputRef.current.showPicker()}>
          <CalendarIcon />
        </label>
        <button
          className="btn"
          aria-label={`Confirm edited task to now read ${updatedTaskName}`}
          type="submit"
          >
          <CheckIcon strokeWidth={2} height={24} width={24} />
        </button>
      </form>
    </div>
  )
}
export default EditForm