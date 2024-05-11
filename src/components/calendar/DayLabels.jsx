import React from "react";

const DayLabels = () => {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const capitalizeFirstLetter = (query) => {
    return query.charAt(0).toUpperCase() + query.substring(1);
  };

  return (
    <div className="grid grid-cols-7 gap-6 sm:gap-12 place-items-center">
      {days.map((day, idx) => (
        <div key={idx} className="font-semibold font-tenon">
          {capitalizeFirstLetter(day)}
        </div>
      ))}
    </div>
  );
};

export default DayLabels;
