// import { IEditProfile, ILoginData, ISignUpData } from "@/app/shared/interface";

import {
    IEditProfile,
    ILoginData,
    ISignUpData,
} from "@/shared/interface";

export const loginAction = async (
    values: ILoginData
): Promise<Response> => {
    const res = await fetch("/api/users/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
    });
  console.log({res})
    return res;
};

export const signUpAction = async (
    values: ISignUpData
): Promise<Response> => {
    const res = await fetch("/api/users/signup", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
    });
    return res;
};

export const userDataAction = async (
    values: IEditProfile
): Promise<Response> => {
    const res = await fetch("/api/users/me", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
    });
    return res;
};

export const getUserAction = async (): Promise<Response> => {
    const res = await fetch("/api/users/me", {
        method: "GET",
    });
    return res;
};

export const logoutAction = async (): Promise<Response> => {
    const res = await fetch("/api/users/logout", {
        method: "GET",
    });
    return res;
};
