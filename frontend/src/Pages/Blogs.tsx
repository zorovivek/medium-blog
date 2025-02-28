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
  
    <div>
      <Appbar/>
      <div className='flex  flex-col pl-[15%] pr-[5%] pt-8 gap-5'>
        {blogs.map(blog=><BlogSingle id= {blog.id} authorName={blog.author.name} title={blog.title} description={blog.description} date="2 feb 2025"/>)}
        {/* <BlogSingle authorName={blogs[0].author.name} date="2 jan, 2025" title="this is a blog" description="this is the decription of the blog Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, atque iusto. Esse, ipsum inventore doloremque consectetur, consequuntur id perferendis et hic commodi, magni aspernatur molestiae pariatur. Unde officiis laborum, nemo voluptas recusandae dicta labore molestiae tempora saepe sunt dolore quas commodi, voluptates eveniet laudantium quo?"  /> */}
        {/* <BlogSingle authorName="Bhavesh" date="2 feb, 2025" title="this is a blog by bhanu chaudhary" description="this is the decription of the blog Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, atque iusto. Esse, ipsum inventore doloremque consectetur, consequuntur id perferendis et hic commodi, magni aspernatur molestiae pariatur. Unde officiis laborum, nemo voluptas recusandae dicta labore molestiae tempora saepe sunt dolore quas commodi, voluptates eveniet laudantium quo?"  /> */}
      </div>
    </div>
    
  )
}

export default Blogs


