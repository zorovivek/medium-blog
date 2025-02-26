import { ChangeEvent, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { SignupInput } from "@vivek1007/medium-common"
import { DATABASE_URL } from "../config"
import axios from "axios"



function SignupComponent() {
  const navigate= useNavigate()
  const [postInputs,setPostInputs]= useState<SignupInput>({
    name: "",
    username: "",
    password: ""
  })
  // Sending post reqquest for signing up 
  const sendRequest= async()=>{
    try{
      const response=await axios.post(`${DATABASE_URL}/api/v1/user/signup`,postInputs)
      const jwt= await response.data.jwt
      console.log(jwt)
      localStorage.setItem("token", jwt)
      navigate("/blogs")
    }
    catch(e){
      return <div>
        there was problem signing you up
      </div>
    }

  }
  return (   <div className="flex flex-col gap-2">
                 <h1 className="font-bold text-2xl px-7">Create an account</h1>
                <div className="flex gap-1 justify-center text-slate-500">
                <h2>Already have an account</h2>
                <Link to="/signin" className="underline">Login</Link>
                </div>
                <div className="flex flex-col gap-1 ">
                  <LabelledInput name="Name" placeholder="Enter your name" onChange={(e)=>{
                    setPostInputs({...postInputs,
                                          name: e.target.value
                  })
                  }}/>
                  <LabelledInput name="Username" placeholder="Enter your username" onChange={(e)=>{
                    setPostInputs({...postInputs,           // ...postInputs is used for holding or bringing all the previous values that are present in the variable and then overwrite it.
                                          username: e.target.value
                  })
                  }}/>
                  <LabelledInput type={"password"} name="password" placeholder="Enter your password" onChange={(e)=>{
                    setPostInputs({...postInputs,
                                          password: e.target.value
                  })
                  }}/>
                </div>
                <button onClick={sendRequest} className="bg-black text-white rounded p-1 mt-2 cursor-pointer "> Signup</button>
             </div>
      

  )
}


/// creating an inputBoix component that takes labelnames, plcaeholders, type and onChange as an input and will reflect and minimise the use of code in making in both signup and signin components

interface typeInput{
  name: string,
  placeholder: string,
  onChange: (e:ChangeEvent<HTMLInputElement>)=>void,
  type?: string
}

export const LabelledInput=({name, placeholder, onChange, type}:typeInput)=>{
    
  return <div className="flex flex-col gap-2 ">
      <h2 className="font-bold"> {name}</h2>
      <input type={type||"text"} onChange={onChange} className="outline-slate-200 outline-2 rounded px-1 focus:ring-blue-500 focus:border-blue-500"  placeholder={placeholder} />
       </div>
}

export default SignupComponent
