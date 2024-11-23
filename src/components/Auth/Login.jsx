import React, { useState } from "react";

const Login = ({handleLogin}) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        handleLogin(email, password)

        setEmail("")
        setPassword("")
    }




    return (
        <div className="flex h-screen w-screen items-center justify-center ">
            <div className="border-2  border-gray-500 p-10 bg-gray-900 p-20 rounded-xl">
                <form
                onSubmit={(e)=>{
                    submitHandler(e)
                }}
                 action="submit" className="flex flex-col gap-4 items-center justify-center">
                    <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="border-2 border-gray-500 rounded-full p-2 text-xl bg-transparent text-white " 
                    type="email" 
                    placeholder="Enter your Email" />
                    <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    type="password"
                    className="border-2 border-gray-500 rounded-full p-2 text-xl bg-transparent text-white "
                    placeholder="Enter your Password" />
                    <button type="submit" className=" w-100 bg-gray-500 rounded-full p-2 text-xl font-semibold">Log in</button>
                </form>
            </div>
        </div>
    )
};

export default Login;