import { useState } from 'react';
import { CheckIcon  } from '@heroicons/react/24/outline';
import { PencilSquareIcon  } from '@heroicons/react/24/outline';
import { TrashIcon } from '@heroicons/react/24/outline';

const TaskItem = ({ task, deleteTask, toggleTask, enterEditMode }) => {
  const [isChecked, setIsChecked ] = useState(task.finished);

  const handleCheckboxChange =  async(e) =>{
    await toggleTask(task);
    setIsChecked(!isChecked);
    
  }

  return (
    <li className='task'>
      <div className="task-group">
        <input
          type="checkbox"
          className='checkbox'
          checked={isChecked}
          onChange={handleCheckboxChange}
          name='name'
          id={task._id}
        />
        <label
          htmlFor={task._id}
          className='label'
        >
          {task.name} {task.deadline == null ? '' : task.deadline}
          <p className='checkmark'>
            <CheckIcon strokeWidth={2} width={24} height={24}/>
          </p>
        </label>
      </div>
      <div className="task-group">
        <button
          className='btn'
          aria-label={`Update ${task.name} Task`}
          onClick={() => enterEditMode(task)}
        >
          <PencilSquareIcon width={24} height={24} />
        </button>

        <button
          className='btn delete'
          aria-label={`Delete ${task.name} Task`}
          onClick={() => deleteTask(task._id)}
        >
          <TrashIcon width={24} height={24} />
        </button>

      </div>
    </li>
  )
}
export default TaskItem