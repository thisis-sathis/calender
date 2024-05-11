import React, { useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const EventCard = ({ eventsList, date, onSave, onCancel }) => {
  const [currentEventIndex, setCurrentEventIndex] = useState(0);
  const currentEvent = eventsList[currentEventIndex] || {};
  const { title: currentTitle, startTime: currentStartTime, endTime: currentEndTime, color: currentColor } = currentEvent;

  const handleSave = (saveEventList) => {
    onSave(date, saveEventList );
    setCurrentEventIndex(0);
  };

  const handleCancel = () => {
    onCancel();
    setCurrentEventIndex(0);
  };

  const handleColorChange = (e) => {
    const inputColor = e.target.value;
    // Validate if input color is in hex format
    if (/^#[0-9A-F]{6}$/i.test(inputColor)) {
      const updatedEvent = { ...currentEvent, color: inputColor };
      const updatedeventsList = [...eventsList];
      updatedeventsList[currentEventIndex] = updatedEvent;
      onSave(updatedeventsList);
    }
  };

  const handlePrev = () => {
    if (currentEventIndex > 0) {
      setCurrentEventIndex(currentEventIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentEventIndex < eventsList.length - 1) {
      setCurrentEventIndex(currentEventIndex + 1);
    }
  };

  return (
    <div className="font-tenon event-card p-4 bg-liteGreen rounded-md border border-customGreen mb-8" style={{ height: "300px" }}>
      <div className="flex mb-4 justify-between">
        <h3 className="text-xl font-bold mb-4 font-tenon">{currentTitle ? "Event" : "Add Event"}</h3>
        {eventsList.length > 1 && (
            <div className="flex justify-between mt-4">
              <button onClick={handlePrev} disabled={currentEventIndex === 0} className="w-8 h-8 cursor-pointer rounded-full bg-gray-200 flex items-center justify-center mr-5 focus:outline-none">
                <FaArrowLeft />
              </button>
              <button onClick={handleNext} disabled={currentEventIndex === eventsList.length - 1} className="w-8 h-8 cursor-pointer rounded-full bg-gray-200 flex items-center justify-center mr-5 focus:outline-none">
              <FaArrowRight />
              </button>
            </div>
          )}
        </div>
      <div className="flex mb-4">
        <div className="flex flex-col mr-4">
          <label htmlFor="title" className="font-bold font-tenon block mb-1">
            Title:
          </label>
          <input
            type="text"
            id="title"
            value={currentTitle || ""}
            placeholder="Enter the event title"
            onChange={(e) => onSave([{ ...currentEvent, title: e.target.value }, ...eventsList.slice(1)])}
            style={currentTitle ? { fontWeight: "bold" } : { fontWeight: "normal" }}
            className="h-10 font-tenon border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>
       
      </div>
      <div className="flex mb-4">
        <div className="flex flex-col mr-4">
          <label htmlFor="startTime" className="font-bold block mb-1">
            Start Time:
          </label>
          <input
            type="time"
            id="startTime"
            value={currentStartTime || ""}
            placeholder="HH:MM"
            onChange={(e) => onSave([{ ...currentEvent, startTime: e.target.value }, ...eventsList.slice(1)])}
            style={currentStartTime ? { fontWeight: "bold" } : { fontWeight: "normal" }}
            className="h-10 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="endTime" className="font-bold block mb-1">
            End Time:
          </label>
          <input
            type="time"
            id="endTime"
            value={currentEndTime || ""}
            placeholder="HH:MM"
            onChange={(e) => onSave([{ ...currentEvent, endTime: e.target.value }, ...eventsList.slice(1)])}
            style={currentEndTime ? { fontWeight: "bold" } : { fontWeight: "normal" }}
            className=" h-10 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>
      </div>
      <div className=" flex items-center justify-between">
        <div className="flex gap-5 items-baseline">
          <label htmlFor="color" className="font-bold block mb-1">
            Event Tag Color:
          </label>
          <div>
            <input
              type="color"
              id="color"
              value={currentColor || ""}
              onChange={handleColorChange}
              className="h-10 border border-gray-300 rounded-md px-1 py-1 ml-2 focus:outline-none focus:ring focus:ring-blue-500"
              style={{ width: "50px", height: "30px" }}
            />
            <span className="ml-2">{currentColor}</span>
          </div>
        </div>
        <div className="flex justify-end">
          <button
            onClick={handleSave}
            className="outline-none bg-blue-500 text-white px-4 py-2 rounded-md mr-2 hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-500"
          >
            Save
          </button>
          <button
            onClick={handleCancel}
            id="cancel"
            className="outline-none bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400 focus:outline-none focus:ring focus:ring-gray-300"
          >
            Cancel
          </button>
        </div>
      </div>
      
    </div>
  );
};

export default EventCard;
