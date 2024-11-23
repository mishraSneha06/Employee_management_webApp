import React from 'react'

const FailedTask =({data}) =>{
    return(
        <div className=' flex-shrink-0 w-[300px] h-full bg-blue-400 rounded-xl'>
        <div className='flex items-center justify-between p-5'>
            <h3 className='bg-red-600 text-white px-3 py-1 rounded-full text-sm'>{data.category}</h3>
            <h4 className='text-white text-sm'>{data.date}</h4>
        </div>
        <h2 className='text-2xl font-semibold text-white p-5'>{data.title}</h2>
        <p className='text-sm text-white p-3'>{data.description}</p>
        <div className='mt-2 '>
            <button className='w-full bg-red-500'>Failed</button>
        </div>
    </div>
    )
} 

export default FailedTask