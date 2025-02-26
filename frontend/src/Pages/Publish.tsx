import axios from "axios"
import { Appbar } from "../components/Appbatr"
import { DATABASE_URL } from "../config"
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Publish() {
  const [title, setTitle]= useState("");
  const [description, setDescription]= useState("")
  const token= localStorage.getItem("token")||""
  const navigate= useNavigate(); 
  

  return (
    <div>
       <Appbar/>
       <div className="p-6">
      <div>
      <input onChange={(e)=>{
        setTitle(e.target.value)
      }} type="text" placeholder="Title" className="bg-gray-100  p-3 w-full outline-gray-100 " />
      </div>
       </div>
       <div className="p-6 ">
        <textarea onChange={(e)=>{
          setDescription(e.target.value)
        }}  placeholder="Description" className="w-full bg-gray-100 text-lg p-3 text-balance h-[80%] outline-0"   />
       </div>
       <div className="p-6 flex items-center justify-center">
        <button onClick={async()=>{
          const response= await axios.post(`${DATABASE_URL}/api/v1/blogs`,{
            title,
            description
          },{
            headers:{
              Authorization:"Bearer "+token
            }
          })
          navigate(`/blogs/${response.data.id}`)
        }} className="bg-green-500 rounded-lg  hover:scale-105 hover:bg-green-600 text-white p-3 font-semibold cursor-pointer" > Publish</button>
       </div>
    </div>
  )
}

export default Publish
