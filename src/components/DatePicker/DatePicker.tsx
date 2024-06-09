import React, { SetStateAction, useState } from "react";
import DatePicker from "react-datepicker";
import { addDays } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";
import CustomInput from "../Inputs/CustomInput";
import CalendarIcon from "../../assets/Icons/CalendarIcon";

interface IProps {
  startDate: any;
  endDate: any;
  setEndDate: React.Dispatch<SetStateAction<Date>>;
  setStartDate: React.Dispatch<SetStateAction<Date>>;
}

const CustomDatePicker = ({
  startDate,
  endDate,
  setStartDate,
  setEndDate,
}: IProps) => {
  const [calendarOpen, setCalendarOpen] = useState(false);

  const toggleCalendar = () => {
    setCalendarOpen((prev) => !prev);
  };

  const onChange = (dates: any) => {
    if (dates) {
      const [start, end] = dates;
      setStartDate(start);
      setEndDate(end);

      if (end) {
        setCalendarOpen(false);
      }
    }
  };

  return (
    <div className="relative w-full">
      <CustomInput
        startIcon={<CalendarIcon />}
        type="text"
        value={`${startDate.toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
        })} - ${
          endDate
            ? endDate.toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
              })
            : ""
        }`}
        onClick={toggleCalendar}
        readOnly
        placeholder="Select dates"
      />

      {calendarOpen && (
        <div className="absolute top-0 z-10">
          <DatePicker
            selected={startDate}
            onChange={onChange}
            startDate={startDate}
            endDate={endDate}
            excludeDates={[addDays(new Date(), 1), addDays(new Date(), 5)]}
            selectsRange
            inline
          />
        </div>
      )}
    </div>
  );
};

export default CustomDatePicker;
