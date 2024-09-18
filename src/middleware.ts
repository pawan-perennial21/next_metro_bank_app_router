import { NextResponse, NextRequest } from "next/server";
import { PATH } from "./shared/constants";

export function middleware(request: NextRequest) {
  const { login, signup, dashboard, main } = PATH;

  const path = request.nextUrl.pathname;
  const isPublicPath = path === login || path === signup || path === main;

  const token = request.cookies.get("token")?.value || "";

  if (isPublicPath && token) {
    return NextResponse.redirect(new URL(dashboard, request.nextUrl));
  }

  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL(login, request.nextUrl));
  }
}

export const config = {
  matcher: ["/", "/editProfile", "/login", "/signup", "/dashboard/:path*"],
};
