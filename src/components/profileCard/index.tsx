"use client";
import { FC } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
// import toast from "react-hot-toast";
import { IProfileCard } from "@/shared/interface";
import { logoutAction } from "@/app/actions/action";
import { PATH } from "@/shared/constants";
import { Avatar, Typography } from "@/shared/components";

//Local imports

const ProfileCard: FC<IProfileCard> = ({
    user: {
        fullName = "Pawan Patidar",
        email = "pawanpatidar@gmail.com",
    },
}) => {
    const router = useRouter();

    const handleLogout = async () => {
        const res = await logoutAction();
        console.log({ res });
        // toast.success(res.data.message);
        router.push(PATH.login);
    };

    return (
        <div className='dropdown-content'>
            <ul className='dropdown-lists'>
                <li className='dropdown-value-profile'>
                    <div className='profile-pic'>
                        <Avatar
                            size='80px'
                            // initials={getInitials(fullName)}
                            fontSize='30px'
                        />
                    </div>
                    <Typography
                        variant='h2'
                        className='text-uppercase'
                    >
                        {fullName}
                    </Typography>
                    <Link
                        href={`https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=${email}`}
                        className='a-line'
                        target='_blank'
                    >
                        <Typography variant='h5'>
                            gopimudumal99@gmail.com
                        </Typography>
                    </Link>
                </li>
                <li className='dropdown-value pointer'>
                    <Link href={"/editProfile"} className='a-text'>
                        <Typography variant='h6' fontWeight='400'>
                            Edit Profile
                        </Typography>
                    </Link>
                </li>
                <li className='dropdown-value'>
                    <Typography variant='h6' fontWeight='400'>
                        Settings
                    </Typography>
                </li>
                <li
                    className='dropdown-value pointer'
                    onClick={handleLogout}
                >
                    <Typography variant='h6' fontWeight='400'>
                        Logout
                    </Typography>
                </li>
            </ul>
        </div>
    );
};

export default ProfileCard;
