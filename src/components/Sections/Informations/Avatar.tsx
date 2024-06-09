import React from "react";

interface AvatarProps {
  src: string;
  name: string;
  title: string;
}

const Avatar: React.FC<AvatarProps> = ({ src, name, title }) => (
  <div className="flex items-center space-x-3">
    <img className="w-8 h-8 rounded-full" src={src} alt="avatar" />
    <div>
      <h3 className="font-semibold"> Curated by {name}</h3>
      <span className="text-sm text-gray-400">{title}</span>
    </div>
  </div>
);
export default Avatar;