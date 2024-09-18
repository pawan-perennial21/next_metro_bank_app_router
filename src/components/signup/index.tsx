"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import React, { FC } from "react";
import toast from "react-hot-toast";
import { signUpAction } from "@/app/actions/action";
import { ISignUpData } from "@/shared/interface";
import { Button, InputField, Typography } from "@/shared/components";
import { PATH, SIGN_UP_FORM_FIELDS } from "@/shared/constants";

const signUpSchema = z.object({
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

const SignUpForm: FC = () => {
    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<ISignUpData>({
        resolver: zodResolver(signUpSchema),
    });

    const onSubmit = async (values: ISignUpData) => {
        try {
            const res = await signUpAction(values);
            console.log({ res });
            // toast.success(res.data.message);
            router.push(PATH.login);
        } catch (error: any) {
            toast.error(
                error.response?.data?.message || error.message
            );
        }
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className='register-form'
        >
            {SIGN_UP_FORM_FIELDS.map(({ label, name, type }) => {
                const fieldName = name as keyof ISignUpData; // Ensure `name` matches the fields in ILoginData
                // console.log(fieldName);
                return (
                    <InputField
                        key={name}
                        label={label}
                        type={type}
                        id={name}
                        {...register(fieldName)} // Ensure proper typing for `register`
                        errorMessage={
                            errors[fieldName]?.message || ""
                        } // Access error messages correctly
                    />
                );
            })}
            <Button type='submit' disabled={isSubmitting}>
                <Typography variant='h4'>
                    Create an Account
                </Typography>
            </Button>
        </form>
    );
};

export default SignUpForm;
