

import React from "react";
import { format, isToday, getDay } from "date-fns";

const CalendarDay = ({ date, today, eventsList, updateDate, colStartClasses }) => {
  const formattedDate = format(date, 'dd-MM-yyyy'); 
  return (
    <div onClick={() => updateDate(formattedDate)} className={`cursor-pointer ${colStartClasses[getDay(date)]}`}>
      <span 
        className={`cursor-pointer flex items-center mb-10 font-tenon justify-center h-8 w-8 rounded-full 
        hover:text-white text-gray-900 ${!isToday(date) && "hover:bg-liteGrey"} ${
          isToday(date) && "bg-customGreen text-white"
        }`}
      >
        {format(date, "d")}

      </span>
      {
        eventsList[formattedDate] && eventsList[formattedDate].slice(0, 2).map((event, index) => (
          <div
            key={index}
            className="flex items-center justify-center h-8 relative"
            style={{ 
              backgroundColor: `${event.color}40`, 
              borderLeft: `3px solid ${event.color}`, 
              borderTopRightRadius: '3px', 
              borderBottomRightRadius: '3px',
              margin: "3px 0"
            }}
          >
            <div className="absolute left-0 top-0 bottom-0 w-2 bg-opacity-50 bg-gray-200"></div>
            <p className="text-black text-xs px-2">{event.title}</p>
          </div>
        ))
      }
      {
        eventsList[formattedDate] && eventsList[formattedDate].length > 3 && (
          <div
            className="flex items-center justify-center h-5 relative"
            style={{ 
              backgroundColor: "#9c27b040", 
              borderLeft: `3px solid #9c27b0`, 
              borderTopRightRadius: '3px', 
              borderBottomRightRadius: '3px',
              margin: "3px 0"
            }}
          >
            <div className="absolute left-0 top-0 bottom-0 w-2 bg-opacity-50 bg-gray-200"></div>
            <p className="text-black text-xs px-2">+More ...</p>
          </div>
        )
      }
    </div>
  );
};

export default CalendarDay;
