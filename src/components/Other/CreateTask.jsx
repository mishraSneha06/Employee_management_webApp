import react, { useState, useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {

    const [userData, setUserData] = useContext(AuthContext)

    const [title, setTitle] = useState("")

    const [description, setDescription] = useState("")

    const [date, setDate] = useState("")

    const [assignTo, setAssignTo] = useState("")

    const [category, setCategory] = useState("")

    const [newTask, setNewTask] = useState({})


       const submitHandler = (e) => {
            e.preventDefault();
        
            const task = {
                title,
                description,
                date,
                category,
                newTask: true,
                accepted: false,
                completed: false,
                failed: false,
            };
        
            console.log("Created Task:", task);
        
            const updatedUserData = userData.map((elem) => {
                if (elem.name === assignTo) {
                    return {
                        ...elem,
                        tasks: [...elem.tasks, task],
                        newTask: elem.newTask + 1,
                        taskCounts: elem.taskCounts + 1,
                    };
                }
                return elem;
            });
        
            setUserData(updatedUserData);
            console.log("Updated User Data:", updatedUserData);


       setTitle('')
       setCategory('')
       setDescription('')
       setAssignTo('')
       setDate('')



    }
       

   
    

    return (
        
        <div className=' mt-10 p-10 bg-gray-900 rounded-xl py-6 px-9'>
        <form
        
        onSubmit={(e)=>{
            submitHandler(e)
        }}
        
        className='flex items-center justify-between  w-full  flex-wrap gap-5'>
            <div className='flex items-start justify-between flex-col w-[45%] gap-5'>
            <div >
            <h3 className='text-sm text-gray-300 mb-0.5' >Task Title</h3>
            <input className=' text-sm py-1 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-40 mb-4'
             type="text"
            placeholder='Task Title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
             />
            </div>
            
            <div>
            <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
            <input className='text-sm py-1 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-40 mb-4' 
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            />
            </div>

            <div>
            <h3 className='text-sm text-gray-300 mb-0.5'>Assign To</h3>
            <input className=' text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-40 mb-4' 
            type="text" 
            placeholder='Assigned To' 
            value={assignTo}
            onChange={(e)=> setAssignTo(e.target.value)}
            />
            </div>

            <div>
            <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
            <select name="" id="" className='text-black'
            value={category}
            onChange={(e) => setCategory(e.target.value)}>
                <option className='text-black' value="" disabled>Select Category</option>
                <option className='text-black' value="Finance">Finance</option>
                <option className='text-black' value="Meetings">Meetings</option>
                <option className='text-black' value="Documentation">Documentation</option>
                <option className='text-black' value="Client Relations">Client Relations</option>
                <option className='text-black' value="Operations">Operations</option>
                <option className='text-black' value="Workshop">Workshop</option>
                <option className='text-black' value="Analysis">Analysis</option>
            </select>
            </div>
            </div>

            <div className='flex items-start flex-col w-2/5'>
           
            <h3 className='text-sm text-gray-300 mb-0.5'>Task Description</h3>
            <textarea className=' w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-40'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
             name="" id=""></textarea>
            <button className='bg-emerald-600 text-white px-5 py-2 rounded-sm mt-4'>Create Task</button>
            </div>
            

        </form>
    </div>

    )
}

export default CreateTask