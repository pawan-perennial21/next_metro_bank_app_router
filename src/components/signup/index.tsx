"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import React, { FC } from "react";
import toast from "react-hot-toast";
import { signUpAction } from "@/app/actions/action";
import { ISignUpData } from "@/shared/interface";
import { Button, InputField, Typography } from "@/shared/components";
import { PATH, SIGN_UP_FORM_FIELDS } from "@/shared/constants";
import { signUpSchema } from "@/utils/validationSchema";

const SignUpForm: FC = () => {
    const router = useRouter();

    const form = useForm<ISignUpData>({
        resolver: zodResolver(signUpSchema),
    });

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = form;

    const onSubmit = async (values: ISignUpData) => {
        const res = await signUpAction(values);
        const data = await res.json();
        if (data.success) {
            toast.success(data.message);
            router.push(PATH.login);
        }
        if (!data.success) {
            toast.error(data.message);
        }
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className='register-form'
        >
            {SIGN_UP_FORM_FIELDS.map(({ label, name, type }) => {
                const fieldName = name as keyof ISignUpData; // Ensure `name` matches the fields in ILoginData
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
