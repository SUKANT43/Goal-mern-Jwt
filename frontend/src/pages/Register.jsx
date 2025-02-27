import {  useState } from "react"
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Register() {
    const [data,setData]=useState(
        {
            name:"",
            email:"",
            password:""
        }
    )
    const navigate=useNavigate()

  const  handleSubmit=async(e)=>{
        e.preventDefault()
        try{
            await axios.post("http://localhost:2008/api/user/register", data)
            alert("Registered")
            setData({
                name:"",
                email:"",
                password:""
            })
            navigate('/login')
        }
        catch (err) {
            alert("Registration failed");
        }
        
    }
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-3xl font-bold text-center text-gray-800">Register</h2>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <input 
                    type="text" 
                    placeholder="Name" 
                    value={data.name} 
                    onChange={e => setData({...data, name: e.target.value})} 
                    className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                
                <input 
                    type="email" 
                    placeholder="Email" 
                    value={data.email} 
                    onChange={e => setData({...data, email: e.target.value})} 
                    className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                
                <input 
                    type="password" 
                    placeholder="Password" 
                    value={data.password} 
                    onChange={e => setData({...data, password: e.target.value})} 
                    className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                
                <button 
                    type="submit" 
                    className="w-full bg-blue-500 text-white p-3 rounded-lg font-semibold hover:bg-blue-600 transition"
                >
                    Register
                </button>

            </form>
        </div>
  )
}

export default Register
