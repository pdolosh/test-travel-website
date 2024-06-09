import React from "react";
import ArrowRiseIcon from "../../../assets/Icons/ArrowRiseIcon";
import { IHiglight, IStopPlace } from "../../../types/interfaces";
import Button from "../../Buttons/Button";
import Save from "../../../assets/Icons/Save";

interface IProps {
  card: IStopPlace | IHiglight;
}

const PlaceCard: React.FC<IProps> = ({ card }) => {
  return (
    <div className="w-[190px] sm:w-[217px] space-y-2 cursor-pointer relative">
      <div className="absolute top-2 left-2">
        <Button label="Curator’s pick" variant="secondary" />
      </div>
      <div className="absolute top-2 right-4">
        <Save />
      </div>
      <img
        className="w-full h-[250px] sm:h-[292px] rounded-2xl "
        src={card.image}
        alt={card.title}
      />

      <div>
        <h2 className="font-semibold">{card.title}</h2>
        {card.rate && (
          <div className="text-sm font-semibold flex items-center gap-2">
            <ArrowRiseIcon />
            <span>{card.rate}/10</span>
          </div>
        )}
        <span className="text-sm text-gray-400">{card.additionalInfo}</span>
      </div>
    </div>
  );
};

export default PlaceCard;
