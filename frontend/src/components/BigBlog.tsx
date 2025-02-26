import { Blog } from "../hooks"
import { Appbar } from "./Appbatr"
import { Avatar } from "./BlogSingle"

export const BigBlog= ({blog}: {blog: Blog})=>{

return <div className="max-w-screen">
    <Appbar/>
    <div className="flex items-center justify-center ">

 <div className="grid w-[70%]  grid-cols-4 md:w-screen">
    <div className="col-span-3 flex flex-col w-auto pt-7 gap-4 pl-[30%]">
    
    <div className="flex flex-col  gap-2">
        <h1 className="text-xl md:text-4xl font-bold"> {blog.title}</h1>
        </div>
        <h2 className="text-slate-500">posted on 2 feb</h2>
    <h2 className="text-lg t ">
    {blog.description}
    </h2>
    </div>
    <div className="flex">
    <div className="flex items-center">
   
    </div>
    <div>
        
    <div className=" flex  flex-col pt-10  gap-2 md:p-4">

        <h1>About Author </h1>
    <div className="flex  gap-3">
    <Avatar authorName={blog.author.name||"Anonymous"}/>
    <h1 className="font-bold text-lg md:text-xl">
        {blog.author.name}
        </h1>
    </div>
    <div>
        this is a catch phrase about the ability of the author to grab user's attention
    </div>
    </div>
    </div>
    </div>

    </div>
</div>
</div>
}