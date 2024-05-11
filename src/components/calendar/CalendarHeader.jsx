import React from "react";
import { format } from "date-fns";
import CalendarNavigation from "./CalendarNavigation";

const CalendarHeader = ({ date, getNextMonth, importEventsCallback, getPrevMonth, addEventsCallback }) => {
  return (
    <div className="flex items-center justify-between">
      <p className="font-semibold text-xl">{format(date, "MMMM yyyy")}</p>
      <div className="flex items-center justify-between">
        <CalendarNavigation onPrev={getPrevMonth} onNext={getNextMonth} />
        <button onClick={addEventsCallback} className="outline-none mr-3 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Add Events</button>
        <button onClick={importEventsCallback} className="outline-none mr-3 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Import Events</button>
      </div>    
    </div>
  );
};

export default CalendarHeader;
