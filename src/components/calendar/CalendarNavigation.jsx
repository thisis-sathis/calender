import React from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const CalendarNavigation = ({ onPrev, onNext }) => {
  return (
    <div className="flex items-center justify-between">
      <button className="w-8 h-8 cursor-pointer rounded-full bg-gray-200 flex items-center justify-center mr-5" onClick={onPrev}>
        <FaArrowLeft />
      </button>
      <button className="w-8 h-8 cursor-pointer rounded-full bg-gray-200 flex items-center justify-center mr-5" onClick={onNext}>
        <FaArrowRight />
      </button>
    </div>
  );
};

export default CalendarNavigation;
