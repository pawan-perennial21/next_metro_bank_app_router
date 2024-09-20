"use client";

import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { Button, InputField, Typography } from "@/shared/components";
import { LOGIN_FORM_FIELDS, PATH } from "@/shared/constants";
import { ILoginData } from "@/shared/interface";
import { loginAction } from "@/app/actions/action";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/utils/validationSchema";

// Define Zod schema for validation

const LoginForm = () => {
    const router = useRouter();

    const form = useForm<ILoginData>({
        resolver: zodResolver(loginSchema),
    });

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = form;

    const onSubmit = async (values: ILoginData) => {
        console.log({ values });
        try {
            const res = await loginAction(values);
            const data = await res.json();
            console.log({ data });
            if (data.success) {
                toast.success(data.message);
                router.push(PATH.dashboard);
            }
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
