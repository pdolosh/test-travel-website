import React, { useState } from "react";
import Airplane from "../../../assets/Icons/Airplane";
import CustomInput from "../../Inputs/CustomInput";
import HumanIcon from "../../../assets/Icons/HumanIcon";
import CustomDatePicker from "../../DatePicker/DatePicker";

type Country = string;
type PersonCount = number;

const FlightSection: React.FC = () => {
  const [countryFrom, setCountryFrom] = useState<Country>("Reykjavík, KEF");
  const [countryTo, setCountryTo] = useState<Country>("San Francisco, SFO");
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(new Date());
  const [personCount, setPersonCount] = useState<PersonCount>(2);

  return (
    <div className="space-y-8">
      <h1 className="font-semibold text-2xl mb-4">Iceland itinerary</h1>
      <div className="p-6 border bg-gray-100 rounded-3xl shadow-lg">
        <form className="flex flex-col md:flex-row md:justify-between md:items-center gap-2 w-full">
          <div className="flex flex-col md:flex-row md:items-center gap-4 flex-grow w-full md:w-10/12 min-w-56">
            <CustomInput
              type="text"
              value={countryFrom}
              onChange={(e) => setCountryFrom(e.target.value)}
              placeholder="Enter country from"
            />
            <div>
              <Airplane />
            </div>
            <CustomInput
              type="text"
              value={countryTo}
              onChange={(e) => setCountryTo(e.target.value)}
              placeholder="Enter country to"
            />
          </div>
          <div className="w-full md:w-2/12 min-w-48 mt-2 md:mt-0">
            <CustomDatePicker
              startDate={startDate}
              endDate={endDate}
              setEndDate={setEndDate}
              setStartDate={setStartDate}
            />
          </div>

          <div className="w-full md:w-2/12 min-w-18 mt-4 md:mt-0">
            <CustomInput
              startIcon={<HumanIcon />}
              type="number"
              value={personCount}
              onChange={(e) => setPersonCount(Number(e.target.value))}
              placeholder="Enter person count"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default FlightSection;
