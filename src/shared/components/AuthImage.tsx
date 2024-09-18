import Image from 'next/image';
import { FC } from 'react';

const AuthWrapper: FC = () => {
  return (
    <Image 
      src="/authLogo.svg"
      alt="signup-image"
      width="400"
      height="600"
      className="auth-image-container"
    />
  );
};

export default AuthWrapper;
