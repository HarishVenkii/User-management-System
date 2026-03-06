import { z } from "zod"

export const userSchema = z.object({

 firstName: z.string().min(1,"First name required"),

 lastName: z.string().min(1,"Last name required"),

 email: z.string().email(),

 password: z.string().min(6),

 confirmPassword: z.string(),

 phone: z.string().min(10),

 department: z.string().min(1),

 role: z.string().min(1)

}).refine(
 data => data.password === data.confirmPassword,
 {
  message:"Passwords must match",
  path:["confirmPassword"]
 }
)