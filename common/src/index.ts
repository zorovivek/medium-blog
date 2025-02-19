import zod from "zod";

export const signupInput= zod.object({
    username: zod.string().email(),
    password: zod.string().min(6),
    name: zod.string().optional()
})

export type SignupInput= zod.infer<typeof signupInput>

export const signinInput= zod.object({
    username: zod.string().email(),
    password: zod.string().min(6),
  })

export type SigninInput= zod.infer<typeof signinInput>

export const createBlog= zod.object({
    title: zod.string(),
    description: zod.string()
})

export type CreateBlog= zod.infer<typeof createBlog>
export const updateBlog= zod.object({
    title: zod.string(),
    description: zod.string(),
    id: zod.string()
})

export type UpdateBlog= zod.infer<typeof updateBlog>


