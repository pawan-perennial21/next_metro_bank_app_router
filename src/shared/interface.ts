import {
  ButtonHTMLAttributes,
  CSSProperties,
  InputHTMLAttributes,
  ReactNode,
} from "react";
import { CURRENT_SERVICES } from "./constants";

export interface IUserData {
  fullName: string;
  email: string;
}

export interface ILayout {
  children: ReactNode;
}

export interface ILoginData {
  email: string;
  password: string;
}

export interface ISignUpData {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  dateOfIncorporation: string;
}

export interface IEditProfile {
  companyName: string;
  email: string;
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
}

export interface IProfileCard {
  user: IUserData;
}

export interface IServicesCard {
  cardTitle: string;
  services: typeof CURRENT_SERVICES;
}

export interface IActiveLink {
  href: string;
  children: ReactNode;
  className: string;
}

export interface IAvatar {
  imageUrl?: string;
  initials?: string;
  size?: string;
  fontSize?: string;
}

export type IButton = ButtonHTMLAttributes<HTMLButtonElement>

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string;
  label?: string;
}

export interface IModal {
  isOpen: boolean;
  title?: ReactNode;
  icon?: ReactNode;
  content?: ReactNode;
  onClose?: () => void;
}

export interface ITypographyProps {
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span" | "div";
  color?: string;
  fontWeight?: "400" | "500" | "700" | "900";
  fontStyle?: "normal" | "italic";
  children: ReactNode;
  style?: CSSProperties;
  className?: string;
}

export interface IEyeIcon {
  onClick?: () => void;
}
