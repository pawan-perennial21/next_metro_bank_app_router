import { NextResponse } from "next/server";

export function SuccessResponse(
    message: string,
    status: number,
    resData?: any
) {
    const response = {
        success: true,
        message,
        data: resData || null,
    };
    if (resData) {
        response.data = resData;
    }
    return NextResponse.json(response, { status });
}

export function ErrorResponse(
    error: string,
    status: number = 500,
    details?: string
) {
    return NextResponse.json(
        {
            success: false,
            message: error,
            details: details || "An error occurred",
        },
        { status }
    );
}
