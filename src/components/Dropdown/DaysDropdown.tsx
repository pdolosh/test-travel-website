import React from "react";

const DaysDropdown: React.FC = () => (
  <select className="border-none">
    {Array.from({ length: 6 }, (_, i) => i + 5).map((value) => (
      <option key={value} value={value}>
        {`${value} days`}
      </option>
    ))}
  </select>
);

export default DaysDropdown;