import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

export async function getDataFromToken(request: NextRequest) {
    const token = request.cookies.get("token")?.value || "";

    const decodedToken: any = jwt.verify(
        token,
        process.env.SECRETE_TOKEN!
    );

    return decodedToken.id;
}
