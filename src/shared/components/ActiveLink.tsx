"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { FC } from "react";
import { PATH } from "../constants";
import { IActiveLink } from "../interface";

const ActiveLink: FC<IActiveLink> = ({ href, children, className }) => {
  const asPath = usePathname();

  // Check if the current path matches the href
  const isActive =
    asPath === href ||
    (asPath === PATH.dashboard && className === "summary-tab");

  return (
    <Link
      href={href}
      className={`custom-link ${className} ${isActive ? "active-tab" : ""}`}
    >
      {children}
    </Link>
  );
};

export default ActiveLink;
