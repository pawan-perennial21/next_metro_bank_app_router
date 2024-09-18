import { ErrorResponse, SuccessResponse } from '../utils/Response';

export async function GET() {
  try {
    const response = SuccessResponse('Logout SuccessFully', 200);

    response.cookies.set('token', '', { expires: new Date(0), httpOnly: true });

    return response;
  } catch (error: any) {
    ErrorResponse(error.message);
  }
}
