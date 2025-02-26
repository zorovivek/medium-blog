import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { Jwt } from "hono/utils/jwt";
import { signupInput, SignupInput } from "@vivek1007/medium-common";



const userRouter= new Hono<{
    Bindings:{
        DATABASE_URL: string,
        JWT_SECRET: string
    }
}>();



userRouter.post("/signup",async (c)=>{
    const prisma= new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    console.log("hi there inside signup")
    const body=await c.req.json();
    const {success}= signupInput.safeParse(body)        // applying zod for checking the type of the input given by the user
    if(!success){
        c.status(403)
        return c.text("the type of the input is not valid")
    }
    
    const user= await prisma.user.create({
        data:{
            email: body.username,
            password: body.password,
            name: body.name
        },
    })
    
    const token=await Jwt.sign({id: user.id},c.env.JWT_SECRET) 
    
    return c.json({
        jwt: token
    })
} )
userRouter.post("/signin",async(c)=>{
    const prisma= new PrismaClient({
        datasourceUrl:c.env.DATABASE_URL
    }).$extends(withAccelerate())
    const body= await c.req.json()
    const user= await prisma.user.findUnique({
        where:{
            email: body.email,
            password: body.password
        }
    });
    if(!user){
        c.status(403)
        return c.json({
            msg: "user not found in the database"
        });
    }
    else{
        const token=await Jwt.sign({id: user.id},c.env.JWT_SECRET);
        
        return c.json({
            jwt: token
        })
    }
});

export default userRouter