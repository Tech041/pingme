import * as z from "zod";

export const signUpSchema = z
  .object({
    fullName: z.string().min(1, { message: "Enter your full name" }),
    username: z.string().min(1, { message: "Enter your username" }),
    gender: z.enum(["male", "female"], { message: "Gender is required" }),
    password: z.string().min(6, { message: "Enter your password" }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"],
  });

export const loginSchema = z.object({
  username: z.string().min(1, { message: "Enter your username" }),

  password: z.string().min(6, { message: "Enter your password" }),
});
