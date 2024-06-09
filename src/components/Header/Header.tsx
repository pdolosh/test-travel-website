import React from "react";
import DaysDropdown from "../Dropdown/DaysDropdown";
import Button from "../Buttons/Button";
import TripInfoItem from "./TripInfoItem";

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between bg-white p-8">
      <div className="flex space-x-4 items-center border-2 p-2 px-4 rounded-3xl">
        <TripInfoItem title="Trips" />
        <TripInfoItem title="Iceland" />
        <DaysDropdown />
      </div>
      <Button
        label="+ Create"
        variant="primary"
        size="medium"
        onClick={() => console.log("Create action triggered")}
      />
    </header>
  );
};

export default Header;
