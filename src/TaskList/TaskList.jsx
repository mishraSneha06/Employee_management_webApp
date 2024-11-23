import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({data}) => {
    return (
        <div id='taskList' className='h-[55%] flex items-center overflow-x-scroll justify-start gap-5 flex-nowrap w-full py-5  mt-10 p-5'>
            {data.tasks.map((e, idx) =>{
                 if(e.newTask){
                    return <NewTask key={idx} data={e}  />
                }
                if(e.accepted){
                    return <AcceptTask key={idx} data={e} />
                }
               
                if(e.completed){
                    return <CompleteTask key={idx} data={e} />
                }
                if(e.failed){
                    return <FailedTask key={idx} data={e} />
                }
            })}
            

        </div>
    )
}

export default TaskList