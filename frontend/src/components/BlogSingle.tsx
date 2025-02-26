import { Link } from "react-router-dom";

interface blogProp{
authorName: string,
title: string,
description: string,
date: string;
id: string
}

function BlogSingle({authorName, title, description, date, id}:blogProp) {
  return (
    <Link to={`/blogs/${id}`}>
        <div className="border-b border-slate-300 pb-1 min-w-[50%] cursor-pointer">
      <div className="flex gap-3 items-center">
      <Avatar  authorName={authorName}/>
        <h1 className="font-sm">
           {authorName}
          </h1>
        <h2 className="text-gray-500">
           {date}
          </h2>
           </div>
      <div  className=" font-bold text-3xl pt-2">
        {title}
      </div>
      <div className="pt-2">
        {description.slice(0,100)} 
        {description.length>100?"...":null}
        <div className="pt-5">
         {Math.ceil(description.length/100)} minute(s) read
        </div>
      </div>
    </div>
    </Link>
  )
}



interface authorname{
  authorName: string
}

export function Avatar({authorName}:authorname){
  return <div className="relative inline-flex flex-col items-center justify-center w-7 h-7 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
  <span className=" flex flex-col justify-center font-medium text-gray-600 dark:text-gray-300">{authorName[0]}</span>
</div>
}


export default BlogSingle

