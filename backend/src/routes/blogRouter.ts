import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { Jwt } from "hono/utils/jwt";

const blogRouter= new Hono<{
    Bindings:{
        DATABASE_URL: string,
        JWT_SECRET: string
    },
    Variables:{
      userId: string;
    }
}>()

blogRouter.use("/*", async(c,next)=>{
  const header= c.req.header("Authorization")||""
  if(!header){
    c.status(411)
    return c.text("no token found for authorization")
  }
  const token=header.split(" ")[1];
  console.log(token)
  const decoded=await Jwt.verify(token,c.env.JWT_SECRET);
  // console.log(decoded)
  if(typeof(decoded.id)!="string" ||!(decoded) || !("id" in decoded) ){
    return c.text("error in the jwt code")
  }
  c.set("userId",decoded.id)
  // console.log(decoded.id)
  await next();

  })
blogRouter.get("/manyblogs", async(c)=>{
  console.log("hi inside manyblog")
  const prisma= new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL
  }).$extends(withAccelerate())
  try{
    const allblogs=await  prisma.post.findMany()
  console.log(allblogs)
  return c.json({
    blogs: allblogs
  })
  }
  catch(e){
    c.status(411)
    return c.text("problem in awaiting")
  }
})

blogRouter.post("/",async (c)=>{
    const prisma= new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate())
    const body =await c.req.json();
    const authId= c.get("userId")
    const blog= await prisma.post.create({
      data:{
        title: body.title,
        description:body.description,
        authorid:authId
      },
    })
    c.status(200)
    return c.json({
      id: blog.id
    })
  } )
  blogRouter.put("/",async (c)=>{ 
    const prisma= new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate())
    const body= await c.req.json();
    const blog= await prisma.post.update({
      where:{
        id: body.id
      },
      data:{
        title: body.title,
        description: body.description
      }
    })
    return c.json({
      id: blog.id
    })
  } )
  blogRouter.get("/bulk", async(c)=>{
    const prisma= new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate())
    const blogs=await prisma.post.findMany({
      select:{
        title: true,
        description: true,
        id: true,
        author:{
          select:{
            name: true,
          }
        }
      }
    });
    console.log(blogs)
    return  c.json({
      blogs: blogs
    })
  })
  blogRouter.get('/:id', async (c) => {
    const prisma= new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate())
    const blog= await prisma.post.findUnique({
      where:{
        id: String(c.req.param("id"))
      },
      select:{
        title: true,
        description: true,
        id: true,
        author:{
          select:{
            name: true
          }
        }
      }
        })
      console.log("hi there")
    if(!blog){
      c.status(403)
      return c.text("this post does not exist in the daatabase")
    }
    c.status(200);
    return c.json({
     blog: blog
    })
  })


  // exporting the router
export default blogRouter;