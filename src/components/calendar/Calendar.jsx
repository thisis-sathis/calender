import React, { useState } from "react";
import CalendarHeader from "./CalendarHeader";
import DayLabels from "./DayLabels";
import CalendarDay from "./CalendarDay";
import ImportEvents from "../events_features/ImportEvents";
import EventCard from "../events/EventCard";
import { useSelector } from 'react-redux';
import { add, eachDayOfInterval, endOfMonth, endOfWeek, format, parse, startOfToday, startOfWeek } from "date-fns";

function Calendar() {
  const today = startOfToday();
  const [currMonth, setCurrMonth] = useState(() => format(today, "MMM-yyyy"));
  const [showEventCard, setShowEventCard] = useState(false);
  const [showImportTextbox, setshowImportTextbox] = useState(false);
  const eventsList = useSelector(state => state.eventsDetails.events);
  const defaultEventDate = format(today, 'dd-MM-yyyy'); 
  const [eventDate, setEventDate] = useState(defaultEventDate);

  let firstDayOfMonth = parse(currMonth, "MMM-yyyy", new Date());
  const colStartClasses = ["", "col-start-2", "col-start-3", "col-start-4", "col-start-5", "col-start-6", "col-start-7"];
  const daysInMonth = eachDayOfInterval({
    start: startOfWeek(firstDayOfMonth),
    end: endOfWeek(endOfMonth(firstDayOfMonth)),
  });

  const getPrevMonth = () => {
    const firstDayOfPrevMonth = add(firstDayOfMonth, { months: -1 });
    setCurrMonth(format(firstDayOfPrevMonth, "MMM-yyyy"));
  };

  const getNextMonth = () => {
    const firstDayOfNextMonth = add(firstDayOfMonth, { months: 1 });
    setCurrMonth(format(firstDayOfNextMonth, "MMM-yyyy"));
  };

  const handleAddEvent = () => {
    setShowEventCard(true);
  };

  const handleSaveEvent = (event) => {
    // Here you can handle saving the event to your state or Redux store
    console.log("Saving event:", event);
    setShowEventCard(false);
  };

  const handleCancelEvent = () => {
    setShowEventCard(false);
  };

  const importEventsCallback =()=>{
    setshowImportTextbox(!showImportTextbox);
  };

  const updateDate = (date) => {
    setEventDate(date);
  };
  console.log("eventsList", eventsList[eventDate]);
  return (
    <div>
      <div className="p-4 w-screen mb-20 flex items-center mt-10 flex-col justify-center overflow-y-scroll">
        <div className="w-[1000px]">
          {( showEventCard || eventsList[eventDate]) && (
            <EventCard onSave={handleSaveEvent} eventDate={eventDate} eventsList={eventsList[eventDate] || []} onCancel={handleCancelEvent} />
          )}
          {showImportTextbox  && (
            <ImportEvents showImportTextbox={showImportTextbox} importEventsCallback={importEventsCallback}  setshowImportTextbox={setshowImportTextbox}/>
          )}
          <CalendarHeader
            getPrevMonth={getPrevMonth}
            addEventsCallback={handleAddEvent}
            importEventsCallback={importEventsCallback}
            getNextMonth={getNextMonth}
            date={firstDayOfMonth}
          />
          <hr className="my-6" />
          <DayLabels colStartClasses={colStartClasses}/>
          <hr className="my-6" />
          <div className="grid grid-cols-7 gap-6 sm:gap-12 mt-8 place-items-center">
            {daysInMonth.map((day, idx) => (
              <CalendarDay  updateDate={updateDate} eventsList={eventsList} key={idx} date={day} colStartClasses={colStartClasses} today={today} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calendar;
