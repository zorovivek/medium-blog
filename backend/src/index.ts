import { Hono } from 'hono'
import userRouter from './routes/userRouter'
import blogRouter from './routes/blogRouter'
const app = new Hono().basePath("/api/v1")
app.get("/", async (c)=>{
  return c.text("this is the get screen of the webpage")
})
app.route("/user", userRouter);
app.route("/blogs", blogRouter);

export default app;