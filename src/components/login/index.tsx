"use client";

import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button, InputField, Typography } from "@/shared/components";
import { LOGIN_FORM_FIELDS, PATH } from "@/shared/constants";
import { ILoginData } from "@/shared/interface";
import { loginAction } from "@/app/actions/action";

// Define Zod schema for validation
const schema = z.object({
    email: z
        .string()
        .email("Invalid email format")
        .min(1, "Email is required"),
    password: z
        .string()
        .min(8, "Password must be at least 8 characters"),
});

const LoginForm = () => {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<ILoginData>({
        resolver: async (data) => {
            try {
                await schema.parseAsync(data);
                return { values: data, errors: {} };
            } catch (error: any) {
                return { values: {}, errors: error.errors };
            }
        },
    });

    const onSubmit = async (values: ILoginData) => {
        console.log({ values });
        try {
            const data = await loginAction(values);
            console.log({ data });
            // toast.success(data.data.message);
            router.push(PATH.dashboard);
        } catch (error: any) {
            toast.error(
                error.response?.data?.message || error.message
            );
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {LOGIN_FORM_FIELDS.map(({ label, name, type }) => {
                const fieldName = name as keyof ILoginData; // Ensure `name` matches the fields in ILoginData
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
                <Typography variant='h4'>Login</Typography>
            </Button>
        </form>
    );
};

export default LoginForm;
