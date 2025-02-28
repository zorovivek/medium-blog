import { Link } from "react-router-dom"
import TextVanisher from "../components/TextVanisher"

export const FrontPage=()=>{
    return <div className="h-screen w-screen  bg-gradient-to-b from-violet-500 from-0% to-100%">
        <h1 className=" font-bold text-white text-7xl align-middle text-center pt-[10%]">
            WELCOME
        </h1>
        <div className="text-xl flex items-center justify-center pt-5">
        <TextVanisher/>
        </div>
        <div className="flex gap-5 justify-center pt-[2%]">   
            <Link to={"/signup"} >
        <button className="text-white font-semibold text-3xl bg-amber-400 p-4 rounded-xl text-center cursor-pointer " > Signup</button>
            </Link>
        <Link to={"/signin"} >
        <button className="text-white font-semibold text-3xl bg-amber-400 p-4 rounded-xl text-center cursor-pointer " > signin</button>
        </Link>
        </div>

        </div>
}