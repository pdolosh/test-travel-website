import React from "react";
import Draggable from "react-draggable";
import TimeWay from "../../assets/Icons/TimeWay";
import Dots from "../../assets/Icons/Dots";
import Lines from "../../assets/Icons/Lines";

type Activity = {
  subTitle: string;
  description: string;
  image: string;
  title: string;
  curator: boolean;
};

type DailyPlanProps = {
  dayPlan: {
    day: string;
    time: string;
    plans: Activity[];
  };
  onDragEnd: (oldIndex: number, newIndex: number) => void;
};

const DailyPlan: React.FC<DailyPlanProps> = ({ dayPlan, onDragEnd }) => {
  return (
    <div className="mt-4 mb-8">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
        <h4 className="text-md font-semibold text-gray-800 mx-4">
          {dayPlan.day}
        </h4>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mx-2">
          <TimeWay />
          <p className="text-sm text-gray-600 mx-2">{dayPlan.time}</p>
          <button>
            <Dots />
          </button>
        </div>
      </div>
      {dayPlan.plans.map((plan, index) => (
        <Draggable
          key={index}
          axis="y"
          handle=".handle"
          onStop={(e, data) => onDragEnd(index, Math.round(data.y / 100))}
        >
          <div className="flex flex-col md:flex-row mt-4 justify-between items-center  bg-white rounded-lg p-1">
            <div className="flex flex-row ">
              <div className="h-[125px] w-[96px] bg-gray-100 rounded-lg overflow-hidden">
                <img
                  className="h-[125px] w-[96px]"
                  src={plan.image}
                  alt={plan.title}
                />
              </div>
              <div className="pl-6">
                <h4 className="text-md font-semibold text-gray-800 mb-2">
                  {plan.title}
                </h4>
                <p className="text-sm text-gray-700 my-5">{plan.subTitle}</p>
                <p className="text-sm text-gray-600 my-2">{plan.description}</p>
              </div>
            </div>
            <div className="flex flex-row">
              <button>
                <Dots />
              </button>
              <div className="handle">
                <Lines />
              </div>
            </div>
          </div>
        </Draggable>
      ))}
    </div>
  );
};

export default DailyPlan;
