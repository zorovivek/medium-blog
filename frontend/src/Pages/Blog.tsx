import { useParams } from "react-router-dom"
import { UseBlog } from "../hooks"
import { BigBlog } from "../components/BigBlog"

const Blog=()=>{
    const {id}= useParams()
    const {loading, blog}= UseBlog({id: id||""})
    if (loading){
        return <div>loading ...</div>
    }
    return <div>
        <BigBlog blog={blog}/>
    </div>
}
export default Blog;