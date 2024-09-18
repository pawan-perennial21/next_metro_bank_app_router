import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  fullName: { type: String, required: [true, 'Please provide fullName'] },
  email: {
    type: String,
    required: [true, 'Please provide email'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Please provide a password'],
  },
  dateOfIncorporation: {
    type: String,
    required: [true, 'Please provide a date of incorporation'],
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  verifyToken: String,
  verifyTokenExpiry: String,
});

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;
