

import React from "react";
import { format, isSameMonth, isToday, getDay } from "date-fns";

const CalendarDay = ({ date, today, eventsList, colStartClasses }) => {
  const formattedDate = format(date, 'dd-MM-yyyy'); 
  console.log("eventsList day", eventsList, formattedDate, eventsList[formattedDate])
  var eventsForTheDate = [ //eventsList[formattedDate]
    {
        "startTime": "08:00",
        "endTime": "09:00",
        "color": "#f6be23",
        "title": "Morning Meeting"
    },
    {
        "startTime": "13:00",
        "endTime": "14:30",
        "color": "#f650le",
        "title": "Lunch with Team"
    },
    {
        "startTime": "17:00",
        "endTime": "18:30",
        "color": "#9c27b0",
        "title": "Project Review"
    },
    {
        "startTime": "10:00",
        "endTime": "11:30",
        "color": "#2196f3",
        "title": "Client Meeting"
    },
    {
        "startTime": "15:00",
        "endTime": "17:00",
        "color": "#f44336",
        "title": "Development Workshop"
    },
    {
        "startTime": "10:00",
        "endTime": "11:30",
        "color": "#2196f3",
        "title": "Client Meeting"
    },
    {
        "startTime": "15:00",
        "endTime": "17:00",
        "color": "#f44336",
        "title": "Development Workshop"
    }
];

  return (
    <div className={colStartClasses[getDay(date)]}>
      <p
        className={`cursor-pointer flex items-center mb-10 font-tenon justify-center h-8 w-8 rounded-full 
        hover:text-white text-gray-900 ${!isToday(date) && "hover:bg-liteGrey"} ${
          isToday(date) && "bg-customGreen text-white"
        }`}
      >
        {format(date, "d")}

      </p>
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
