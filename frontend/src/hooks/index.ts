import axios from "axios";
import { useEffect, useState } from "react"
import { DATABASE_URL } from "../config";


// hook that fetches all the blogs present in the database
export interface Blog{
    author: {
        name: string
    },
    title: string,
    description: string,
    id: string
}

export const useBlogs= ()=>{
    const [loading, setLoading]= useState(true);
    const [blogs, setBlogs]= useState<Blog[]>([]);
    
    useEffect(()=>{
        axios.get(`${DATABASE_URL}/api/v1/blogs/bulk`, {
            headers:{
                Authorization:`bearer ${localStorage.getItem("token")}`
            }
        })
        .then((response)=>{
            console.log("inside the bulk hook")
            setLoading(false);
            setBlogs(response.data.blogs)
        })
    },[])
    return {
        loading,
        blogs
    }
}

// creating hook for fetching a single hook from the backend

export const UseBlog=({id}:{id: string})=>{
    const [loading, setLoading]= useState(true);
    const [blog, setBlog]= useState<Blog>({author:{
        name:"anonymous"
    },
    title:"this is demo title",
description: "this is demo description",
id:"hjsgdfuaykgf"});
    
    useEffect(()=>{
        axios.get(`${DATABASE_URL}/api/v1/blogs/${id}`, {
            headers:{
                Authorization:`bearer ${localStorage.getItem("token")}`
            }
        })
        .then((response)=>{
            setLoading(false);
            setBlog(response.data.blog)
        })
    },[id])
    return {
        loading,
        blog
    }
}