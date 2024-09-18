import User from '@/models/userModel';
import { connect } from '@/config/db';
import bcryptjs from 'bcryptjs';
import { NextRequest } from 'next/server';
import MyCustomError from '../utils/MyCustomError';
import { ErrorResponse, SuccessResponse } from '../utils/Response';

connect();

export async function POST(req: NextRequest) {
  try {
    const reqBody = await req.json();
    const { fullName, email, password, dateOfIncorporation } = reqBody;

    // Check if user already exists
    const user = await User.findOne({ email });

    if (user) {
      return ErrorResponse('User already exits', 400);
    }

    // hash password
    const salt = await bcryptjs.genSalt(10);
    const hashPassword = await bcryptjs.hash(password, salt);

    const newUser = await User.create({
      fullName,
      email,
      password: hashPassword,
      dateOfIncorporation,
    });

    return SuccessResponse('User created Successfully', 201, newUser);
  } catch (error) {
    if (error instanceof MyCustomError) {
      return ErrorResponse(error.message);
    } else {
      return ErrorResponse('An unknown error occurred');
    }
  }
}
