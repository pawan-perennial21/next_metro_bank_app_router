"use client";
import { FC } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";

//Local imports
import {
    Button,
    InputField,
    Typography,
} from "../../shared/components";
import { EDIT_PROFILE_FIELDS, PATH } from "../../shared/constants";
import { IEditProfile } from "@/shared/interface";
import { userDataAction } from "@/app/actions/action";
import { updateProfile } from "@/utils/validationSchema";

const Profile: FC = () => {
    const router = useRouter();

    const form = useForm<IEditProfile>({
        resolver: zodResolver(updateProfile),
        defaultValues: {
            companyName: "",
            email: "",
            oldPassword: "",
            newPassword: "",
            confirmPassword: "",
        },
    });

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = form;

    const handleUpdateProfile = async (values: IEditProfile) => {
        try {
            const res = await userDataAction(values);
            const data = await res.json();
            toast.success(data.message);
            router.push(PATH.dashboard);
        } catch (error: any) {
            toast.error(
                error.response?.data?.message || error.message
            );
        }
    };

    return (
        <div className='edit-profile'>
            <Typography variant='h2' className='page-title'>
                Edit Profile
            </Typography>
            <form
                onSubmit={handleSubmit(handleUpdateProfile)}
                className='update-form'
            >
                {EDIT_PROFILE_FIELDS.map(({ label, name, type }) => {
                    const fieldName = name as keyof IEditProfile; // Ensure `name` matches the fields in ILoginData
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
                    <Typography variant='h4'> Update </Typography>
                </Button>
            </form>
        </div>
    );
};

export default Profile;
