

import { InformayionsRegionTittleWithCarouselProps } from "../../types/interfaces";
import Carousel from "../Carousel/Carousel";

const InformayionsRegionTittleWithCarousel = ({
  label,
  data,
  button,
}: InformayionsRegionTittleWithCarouselProps) => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h3 className="font-semibold">{label}</h3>
        {button}
      </div>
      <div className="mt-4">
        
        <Carousel data={data} />
      </div>
    </div>
  );
};

export default InformayionsRegionTittleWithCarousel;
