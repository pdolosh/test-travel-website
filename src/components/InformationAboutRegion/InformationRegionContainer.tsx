import React, { useState } from "react";
import RegionInformations from "./RegionInformations";
import Button from "../Buttons/Button";
import { IRegion } from "../../types/interfaces";
import InformayionsRegionTittleWithCarousel from "./InformayionsRegionTittleWithCarousel";
import DailyPlan from "../DailyPlan/DailyPlan";
import Star from "../../assets/Icons/Star";
import Bed from "../../assets/Icons/Bed";
import Plan from "../../assets/Icons/Plan";
import StarBlack from "../../assets/Icons/StarBlack";
import { dailyPlanData } from "../RegionsData/DailyPlanData";
import More from "../../assets/Icons/More";

interface IProps {
  region: IRegion;
}

const InformationRegionContainer: React.FC<IProps> = ({ region }) => {
  const [showDailyPlan, setShowDailyPlan] = useState(false);
  const [plans, setPlans] = useState(dailyPlanData);

  const handleShowDailyPlan = () => {
    setShowDailyPlan(!showDailyPlan);
  };

  const handleDragEnd = (oldIndex: number, newIndex: number) => {
    if (newIndex < 0 || newIndex >= plans.length) {
      return;
    }

    const updatedPlans = [...plans];
    const [movedPlan] = updatedPlans.splice(oldIndex, 1);
    updatedPlans.splice(newIndex, 0, movedPlan);

    setPlans(updatedPlans);
  };

  return (
    <div className="relative">
      <div>
        <div>
          <div className="absolute h-full w-[15px]">
            <div className="w-6 h-6 bg-violet-500 absolute rounded-full left-[-10px] top-[0.5%] flex items-center justify-center text-white z-10">
              A
            </div>
            <div className="w-[2px] h-[58.5%] border absolute top-8" />
          </div>
          <div className="pl-8">
            <RegionInformations
              name={region.name}
              points={region.points}
              description={region.description}
            />
          </div>
        </div>
        {showDailyPlan ? (
          <div>
            <div className="absolute h-full w-[15px]">
              <div className="w-6 h-6 bg-gray-400 border-white absolute rounded-full left-[-10px] top-[2.5%] z-10 flex items-center justify-center">
                <Plan />
              </div>
              <div className="w-[2px] h-[56%] border absolute top-8" />
            </div>

            <div className="pl-8 pt-8">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
                <h3 className="text-md font-semibold text-gray-800">
                  2 days plan
                </h3>
                <div>
                  <Button
                    label="Show highlights"
                    startIcon={<StarBlack />}
                    onClick={handleShowDailyPlan}
                  />
                </div>
              </div>
              {plans.map((plan, index) => (
                <DailyPlan
                  key={index}
                  dayPlan={plan}
                  onDragEnd={handleDragEnd}
                />
              ))}
            </div>
          </div>
        ) : (
          <div>
            <div className="absolute h-[360px] w-[15px] ">
              <div className="w-6 h-6 bg-gray-400 absolute rounded-full left-[-10px] top-[7.5%] z-10 flex items-center justify-center">
                <Star />
              </div>
              <div className="w-[2px] h-[48%] border absolute top-8" />
            </div>

            <div className="pl-8 pt-4">
              <InformayionsRegionTittleWithCarousel
                label="Region highlights"
                data={region.higlights}
                button={
                  <Button
                    label="Show daily plan"
                    startIcon={<More />}
                    onClick={handleShowDailyPlan}
                  />
                }
              />
            </div>
          </div>
        )}
        <div>
          <div className="absolute h-[370px] w-[15px]">
            <div className="w-6 h-6 bg-gray-400 absolute rounded-full left-[-10px] top-[3.5%] flex items-center justify-center z-10">
              <Bed />
            </div>
          </div>
          <div className="pl-8 pt-4">
            <InformayionsRegionTittleWithCarousel
              label="Where to stay"
              data={region.stopPlaces}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InformationRegionContainer;
