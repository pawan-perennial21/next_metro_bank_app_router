import AuthWrapper from "@/shared/components/AuthImage";
import "../../styles/main.scss";
import { Toaster } from "react-hot-toast";
export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body className='auth-container'>
                <AuthWrapper />
                {children}
                <Toaster position="top-center" /> 
            </body>
        </html>
    );
}
