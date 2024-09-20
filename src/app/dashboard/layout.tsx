import { FC } from "react";
import "../../styles/main.scss";
import { ILayout } from "@/shared/interface";
import Navbar from "@/components/navbar";
import { Toaster } from "react-hot-toast";

const RootLayout: FC<ILayout> = ({ children }) => {
    return (
        <html>
            <body>
                <Toaster position="top-center" /> 
                <Navbar />
                {children}
            </body>
        </html>
    );
};

export default RootLayout;
