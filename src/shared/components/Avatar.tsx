import Image from "next/image";
import { FC } from "react";
import { IAvatar } from "../interface";

const Avatar: FC<IAvatar> = ({
  imageUrl = "",
  initials = "",
  size = "50px",
  fontSize = "16px",
}) => {
  const avatarStyles = {
    width: size,
    height: size,
  };

  return (
    <div className="avatar" style={avatarStyles}>
      {imageUrl ? (
        <Image src={imageUrl} alt="Avatar" className="avatar-image" />
      ) : (
        <div className="avatar-initials" style={{ fontSize }}>
          {initials}
        </div>
      )}
    </div>
  );
};

export default Avatar;
