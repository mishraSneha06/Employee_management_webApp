import React from 'react'
import Header from '../Other/Header'
import CreateTask from '../Other/CreateTask'
import AllTask from '../Other/AllTask'

const AdminDashboard = (props) => {
    return (
        <div className='h-screen w-full p-10'>
            <Header changeUser={props.changeUser} />

           <CreateTask data={props.data} />
           <AllTask data={props.data}/>
        </div>
    )
}

export default AdminDashboard