import React from "react";

interface ITripInfoItemProps {
  title: string;
}

const TripInfoItem: React.FC<ITripInfoItemProps> = ({ title }) => (
  <>
    <button className="border-r-2 border-gray-400 pr-4">{title}</button>
  </>
);

export default TripInfoItem;
