

import React from 'react'

const TaskItem = ({task}) => {
  return (
    <li className='px-2 border-b border-stone-300 text-slate-600 pb-2'>
      {task}
    </li>
  )
}

export default TaskItem