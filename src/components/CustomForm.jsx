import { useState, useRef } from 'react'

// library imports
import { PlusIcon, CalendarIcon } from '@heroicons/react/24/solid'

const CustomForm = ({ addTask }) => {
  const [task, setTask] = useState("");
  const [date, setDate] = useState('');
  const inputRef = useRef(null)

  const handleFormSubmit = (e) => {
    e.preventDefault();
    addTask({
      name: task,
      finished: false,
      deadline: date.length === 0 ? null : date
    })
    setTask('')
    setDate('')
  }

  return (
    <form
      className="todo"
      onSubmit={handleFormSubmit}
      >
      <div className="wrapper">
        <input
          type="text"
          id="task"
          className="input"
          value={task}
          onInput={(e) => setTask(e.target.value)}
          required
          autoFocus
          maxLength={60}
          placeholder="Enter Task"
        />
        <label
          htmlFor="task"
          className="label"
        >Enter Task</label>
      <input
          className='input'
          type='date'
          id='date'
          value={date}
          onChange={e => setDate(e.target.value)}   
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
        aria-label="Add Task"
        type="submit"
        >
        <PlusIcon />
      </button>
    </form>
  )
}
export default CustomForm