import { z } from "zod";

export const loginSchema = z.object({
    email: z
        .string()
        .email("Invalid email format")
        .min(1, "Email is required"),
    password: z
        .string()
        .min(8, "Password must be at least 8 characters"),
});

export const signUpSchema = z.object({
    fullName: z.string().min(1, "Full name is required"),
    email: z
        .string()
        .email("Invalid email format")
        .min(1, "Email is required"),
    password: z
        .string()
        .min(8, "Password must be at least 8 characters"),
    confirmPassword: z
        .string()
        .min(8, "Please confirm your password"),
    // .refine((data, context) => data === context.parent.password, {
    //     message: "Passwords do not match",
    // }),
    dateOfIncorporation: z
        .string()
        .min(1, "Date of Incorporation is required"),
});

export const updateProfile = z.object({
    companyName: z.string().min(1, "Company Name is required"),
    email: z.string().email("Invalid email address"),
    oldPassword: z
        .string()
        .min(6, "Old password must be at least 6 characters"),
    newPassword: z
        .string()
        .min(6, "New password must be at least 6 characters"),
    confirmPassword: z
        .string()
        .min(6, "Confirm password must be at least 6 characters"),
    // .refine(
    //     (val, ctx) => val === ctx.parent.newPassword,
    //     "Passwords must match"
    // ),
});
