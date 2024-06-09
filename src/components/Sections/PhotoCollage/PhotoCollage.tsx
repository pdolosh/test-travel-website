import React from "react";
import Aurora from "../../../assets/Images/Aurora.png";
import Waterfall from "../../../assets/Images/Waterfall.png";
import River from "../../../assets/Images/River.png";
import RiverTown from "../../../assets/Images/RiverTown.png";
import Cave from "../../../assets/Images/Cave.png";
import Button from "../../Buttons/Button";
import Collage from "../../../assets/Icons/Collage";

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
}

const Image: React.FC<ImageProps> = ({ src, alt, className }) => (
  <img className={`object-cover ${className}`} src={src} alt={alt} />
);

const PhotoCollage: React.FC = () => {
  return (
    <div className="w-full grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-1 rounded-3xl overflow-hidden">
      <Image
        src={Aurora}
        alt="Aurora"
        className="col-span-2 row-span-2 w-full h-full"
      />
      <Image src={Waterfall} alt="Waterfall" />
      <Image src={River} alt="River" />
      <Image src={RiverTown} alt="Houses" />
      <div className="relative">
        <Image src={Cave} alt="Ice" />
        <Button
          label="All photos"
          variant="outline"
          size="small"
          startIcon={<Collage />}
          onClick={() => console.log("Open all photos")}
        />
      </div>
    </div>
  );
};

export default PhotoCollage;
