import { Appbar } from "../components/Appbatr"
import BlogSingle from "../components/BlogSingle"
import { useBlogs } from "../hooks"


function Blogs() {
  const {loading, blogs}= useBlogs()
  if(loading){
    return <div>
      loading....
    </div>
  }
  console.log(blogs)
  return (
  
    <div className="w-[]" >
      <Appbar/>
      <div className='flex  flex-col  items-center justify-center pt-5 gap-5'>
        {blogs.map(blog=><BlogSingle id= {blog.id} authorName={blog.author.name} title={blog.title} description={blog.description} date="2 feb 2025"/>)}
        </div>
    </div>
    
  )
}

export default Blogs


