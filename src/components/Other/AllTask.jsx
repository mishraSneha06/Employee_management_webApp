import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => { 
       
    const [userData, setUserData] = useContext(AuthContext);

    return (
        <div className=" bg-gray-900 p-5 mt-5 rounded ">
             <div className="bg-red-400 py-2 px-4 flex justify-between rounded m-2">
            <h2 className="w-1/5 ">Employee Name</h2>
            <h3 className="w-1/5 ">New Task</h3>
            <h5 className="w-1/5 ">Active Task</h5>
            <h5 className="w-1/5 ">Completed</h5>
            <h5 className="w-1/5">Failed</h5>
           </div>

           <div className="h-[80%] overflow-auto">
           {userData.map(function(elem, idx){
            return(
            <div key={idx} className="bg-gray-800 py-2 px-4 flex justify-between rounded m-2 border-gray-600">
            <h2 className="w-1/5">{elem.name}</h2>
            <h3 className="w-1/5 text-blue-600">{elem.newTask}</h3>
            <h5 className="w-1/5 text-yellow-400">{elem.accepted}</h5>
            <h5 className="w-1/5 text-white-600">{elem.completed}</h5>
            <h5 className="w-1/5 text-red-600">{elem.failed}</h5>
           </div>
            )
           })}
           </div>

        </div>
    )

}

export default AllTask