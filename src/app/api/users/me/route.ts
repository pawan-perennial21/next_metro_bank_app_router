import User from "@/models/userModel";
import { NextRequest } from "next/server";
import { ErrorResponse, SuccessResponse } from "../utils/Response";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { getDataFromToken } from "@/utils/getDataFromToken";

export async function GET(request: NextRequest) {
    try {
        const userId = await getDataFromToken(request);
        const user = await User.findById(userId).select("-password");
        return SuccessResponse("User Get successfully", 200, user);
    } catch (error: any) {
        return ErrorResponse(error.message, 500, error.stack);
    }
}

export async function PUT(request: NextRequest) {
    try {
        const reqBody = await request.json();

        const {
            companyName,
            email,
            oldPassword,
            newPassword,
            confirmPassword,
        } = reqBody;

        if (
            !companyName &&
            !email &&
            !oldPassword &&
            !newPassword &&
            !confirmPassword
        ) {
            return ErrorResponse("No update data provided.");
        }

        const userId = await getDataFromToken(request);

        // fetch user data
        const existingUser = await User.findOne({ _id: userId });

        if (!existingUser) {
            return ErrorResponse("User doesn't exist.");
        }

        if (companyName) {
            existingUser.fullName = companyName;
        }
        if (email) {
            existingUser.email = email;
        }

        if (oldPassword && newPassword && confirmPassword) {
            const validatePassword = await bcryptjs.compare(
                oldPassword,
                existingUser.password
            );
            if (!validatePassword) {
                return ErrorResponse("Invalid password");
            }

            // hash password
            const salt = await bcryptjs.genSalt(10);
            existingUser.password = await bcryptjs.hash(
                newPassword,
                salt
            );

            // Re-generate the token after password change
            const tokenData = {
                id: existingUser._id,
                fullName: existingUser.fullName,
                email: existingUser.email,
            };

            const token = jwt.sign(
                tokenData,
                process.env.SECRET_TOKEN!,
                {
                    expiresIn: "1h",
                }
            );

            // save the user
            await existingUser.save();

            const response = SuccessResponse(
                "User updated successfully",
                200
            );

            response.cookies.set("token", token, { httpOnly: true });

            return response;
        }
    } catch (error: any) {
        return ErrorResponse(error.message);
    }
}
