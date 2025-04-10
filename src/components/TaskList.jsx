
import { useContext } from 'react';
import TaskItem from './TaskItem';
import { AppContext } from '../context/AppContext';

const TaskList = () => {
  const {tasks} = useContext(AppContext);

  return (
    <main className='bg-white shadow rounded mt-4'>
      <h2 className='text-center font-bold text-2xl text-stone-800'>Tareas del usuario</h2>
      <ul className='flex flex-col gap-2'>
        {tasks.map(

          (task,index)=>{
            return (<TaskItem key = {index}  task = {task}/>)
          }


        )}
      </ul>
    </main>
  )
}

export default TaskList