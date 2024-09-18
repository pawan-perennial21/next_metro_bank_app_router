import { NextRequest } from 'next/server';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';

// Local files
import { ErrorResponse, SuccessResponse } from '../utils/Response';
import User from '@/models/userModel';
import { connect } from '@/db/dbConfig';
import MyCustomError from '../utils/MyCustomError';

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { email, password } = reqBody;

    if (!email || !password) {
      return ErrorResponse('Please provide the credentials');
    }

    const user = await User.findOne({ email });

    if (!user) {
      return ErrorResponse("User doesn't exists ");
    }

    const validatePassword = await bcryptjs.compare(password, user.password);
    if (!validatePassword) {
      return ErrorResponse('Invalid credential');
    }

    const tokenData = {
      id: user._id,
      fullName: user.fullName,
      email: user.email,
    };
    const token = jwt.sign(tokenData, process.env.SECRETE_TOKEN!, {
      expiresIn: '1h',
    });

    const response = SuccessResponse('Login Successfully', 200);

    response.cookies.set('token', token, { httpOnly: true });

    return response;
  } catch (error) {
    if (error instanceof MyCustomError) {
      return ErrorResponse(error.message);
    } else {
      return ErrorResponse('An unknown error occurred');
    }
  }
}
