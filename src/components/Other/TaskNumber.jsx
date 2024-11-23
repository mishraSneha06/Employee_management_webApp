import React from 'react'

const TaskNumber = ({data}) => {
    return (
        <div className='flex mt-10 screen justify-between gap-5'>
            <div className=' w-[45%] p-10 bg-red-600 rounded-xl py-6 px-9'>
                <h2 className='text-3xl font-semibold text-white '>{data.newTask}</h2>
                <h3 className='text-xl font-medium text-white '>New Task</h3>
            </div>
           
            <div className=' w-[45%] p-10 bg-green-600 rounded-xl py-6 px-9'>
                <h2 className='text-3xl font-semibold text-white '>{data.accepted}</h2>
                <h3 className='text-xl font-medium text-white '>Accepted Task</h3>
            </div>

            <div className=' w-[45%] p-10 bg-blue-600 rounded-xl py-6 px-9'>
                <h2 className='text-3xl font-semibold text-white '>{data.completed}</h2>
                <h3 className='text-xl font-medium text-white '>Completed Task</h3>
            </div>
            
            <div className=' w-[45%] p-10 bg-yellow-600 rounded-xl py-6 px-9'>
                <h2 className='text-3xl font-semibold text-white '>{data.failed}</h2>
                <h3 className='text-xl font-medium text-white '>Failed Task</h3>
            </div>
            
        </div>
    )
}

export default TaskNumber