import { Link } from "react-router-dom"
import { Avatar } from "./BlogSingle"

export const Appbar=()=>{
    return <div className="flex justify-between items-center border-b  p-4  md:w-screen">
       <Link to={"/blogs"}>
        <div className="cursor-pointer">
            Medium
        </div>
       </Link>
        <div>
        <Link to={"/publish"}>
        <button type="button" className="cursor-pointer text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-3 me-2 mb-2">Add</button>
        </Link>
       
            <Avatar authorName="Vivek"/>
        </div>

    </div>
}