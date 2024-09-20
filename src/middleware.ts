import { NextResponse, NextRequest } from "next/server";
import { PATH } from "./shared/constants";

export function middleware(request: NextRequest) {
    const { login, signup, dashboard, main } = PATH;

    const path = request.nextUrl.pathname;
    const isPublicPath =
        path === login || path === signup || path === main;

    const token = request.cookies.get("token")?.value || "";

    // If the user is authenticated and tries to access public pages, redirect to dashboard
    if (isPublicPath && token) {
        return NextResponse.redirect(
            new URL(dashboard, request.nextUrl)
        );
    }

    // If the user is not authenticated and tries to access the root (/), redirect to login
    if (path === "/" && !token) {
        return NextResponse.redirect(new URL(login, request.nextUrl));
    }

    // If the user is not authenticated and tries to access a private path, redirect to login
    if (!isPublicPath && !token) {
        return NextResponse.redirect(new URL(login, request.nextUrl));
    }

    // If none of the conditions are met, continue with the request
    return NextResponse.next();
}

export const config = {
    matcher: [
        "/",
        "/editProfile",
        "/login",
        "/signup",
        "/dashboard/:path*",
    ],
};
