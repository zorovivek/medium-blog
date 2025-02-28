import { Link, useNavigate } from "react-router-dom"
import { LabelledInput } from "./SignupComponent";
import { useState } from "react";
import { SigninInput } from "@vivek1007/medium-common";
import axios from "axios";
import { DATABASE_URL } from "../config";


function SigninComponent() {
  const navigate= useNavigate();
  const [inputValues, setInputValues]= useState<SigninInput>({
    username:"",
    password:""
  })
  const sendRequest= async()=>{
    try{
      const response=await  axios.post(`${DATABASE_URL}/api/v1/user/signin`,inputValues)
      const jwt= await response.data.jwt||"";
      console.log(jwt)
      localStorage.setItem("token",jwt)
      navigate("/blogs")
        }    catch(e){
      // send alert that the request failed
      return <div>
        error ehile sending request to the backend
      </div>
    }
  }
  return (   <div className="flex flex-col gap-2">
                <h1 className="font-bold text-2xl text-center ">Login</h1>
                <div className="flex gap-1 justify-center text-slate-500 px-6">
                <h2>Do not have an account</h2>
                <Link to="/signup" className="underline">Signup</Link>
                </div>
                <div className="flex flex-col gap-1 ">
                <LabelledInput name="Username" placeholder="Enter usernsme" onChange={(e)=>{
                    
                      setInputValues({
                        ...inputValues,
                        username:e.target.value

                      })
                    
                }}/>
                <LabelledInput type={"password"} name="Password" placeholder="Enter password" onChange={(e)=>{
                  setInputValues({...inputValues,
                    password:e.target.value
                  })
                }}/>
                </div>
                <button onClick={sendRequest} className="bg-black text-white rounded p-1 mt-2 cursor-pointer"> Signin</button>
             </div>
      

  )
}

export default SigninComponent;
