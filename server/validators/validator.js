const { z } = require("zod");

//reate an object schema
const loginSchema = z.object({
  email: z
    .string({ required_error: "email is required" })
    .trim()
    .email({ message: "Please enter a valid email address" })
    .min(12, { message: "email  must be at least 8 characters long" })
    .max(200, { message: "email  must be at least 200 characters long" }),
  password: z
    .string({ required_error: "password is required" })
    .trim()
    .min(10, { message: "password must be at least 10 characters long" })
    .max(20, { message: "password must be at least 20 characters long" }),
});


const signupSchema = loginSchema.extend({
  username: z
    .string({ required_error: "name is required" })
    .trim()
    .min(2, { message: "name  must be at least 2 characters long" })
    .max(100, { message: "name  must be at least 100 characters long" }),

  phone: z
    .string({ required_error: "phone is required" })
    .trim()
    .min(10, { message: "phone must be at least 10 characters long" })
    .max(20, { message: "phone must be at least 20 characters long" }),
});

module.exports = {signupSchema,loginSchema};
