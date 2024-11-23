 import React from "react"
 import Header from "../Other/Header" 
import TaskNumber from "../Other/TaskNumber"
import TaskList from "../../TaskList/TaskList"

 const EmployeeDashboard = (props) => {
    return (
        <div className=" h-screen  w-full bg-[#1C1C1C] p-10">
            <Header changeUser={props.changeUser} data={props.data} />
            <TaskNumber data={props.data}/>
            <TaskList data={props.data} />
        </div>
    )
 }
 export default EmployeeDashboard