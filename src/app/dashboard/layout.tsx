import { FC } from "react";

import { ILayout } from "@/shared/interface";
import Navbar from "@/components/navbar";

const RootLayout: FC<ILayout> = ({ children }) => {
    return (
        <html>
            <body>
                <Navbar />
                {children}
            </body>
        </html>
    );
};

export default RootLayout;