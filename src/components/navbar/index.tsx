"use client";
import { useState, useEffect, FC } from "react";

import Link from "next/link";
import { IUserData } from "@/shared/interface";
import useHandleAxiosError from "@/shared/hooks/useHandleAxiosError";
import { getUserAction } from "@/app/actions/action";
import { PATH } from "@/shared/constants";
import { Avatar, Typography } from "@/shared/components";
import { DropIcon, Notify } from "@/shared/icons";
import ProfileCard from "../profileCard";

const Navbar: FC = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [userData] = useState<IUserData>();
    const handleAxiosError = useHandleAxiosError();

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const getDetailsUser = async () => {
        try {
          const res = await getUserAction();
          console.log({res})
            // setUserData(res.data.data);
        } catch (error: any) {
            handleAxiosError(error);
        }
    };

    useEffect(() => {
        getDetailsUser();
    }, []);

    return (
        <div className='navbar-container'>
            <div className='flex'>
                <Link href={PATH.dashboard} color='inherit'>
                    <div className='navbar-title'>
                        <Typography
                            // className={orbitron.className}
                            variant='h2'
                            color='#D90429'
                            fontWeight='900'
                        >
                            Micro
                        </Typography>
                        <Typography
                            // className={orbitron.className}
                            variant='h2'
                            fontWeight='900'
                        >
                            Bank
                        </Typography>
                    </div>
                </Link>
                <Typography
                    className='navbar-company-name'
                    variant='h2'
                >
                    {userData?.fullName || "-"}
                </Typography>
            </div>
            <ul className='navbar-ul'>
                <li className='navbar-action'>
                    <Notify />
                </li>
                <div className='flex'>
                    <li>
                        <Avatar
                            // initials={getInitials(
                            //     userData?.fullName || ""
                            // )}
                            size='37px'
                        />
                    </li>
                    <li
                        className='navbar-arrow-down'
                        onClick={toggleDropdown}
                    >
                        <DropIcon />
                    </li>
                </div>
            </ul>

            {isDropdownOpen && userData?.fullName && (
                <ProfileCard user={userData as IUserData} />
            )}
        </div>
    );
};

export default Navbar;
