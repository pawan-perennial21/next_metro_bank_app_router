import AuthWrapper from "@/shared/components/AuthImage";

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
            </body>
        </html>
    );
}
