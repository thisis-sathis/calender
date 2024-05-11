import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { importEvents } from "../../actions/eventsActions";
import { toast } from "react-toastify";

const ImportEvents = ({setshowImportTextbox, importEventsCallback, showImportTextbox}) => {
  const [eventsData, setEventsData] = useState("");

  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    setEventsData(event.target.value);
  };

  const onimportEventsCallback = () => {
    var trimmedEventsData = eventsData.trim();
    if (trimmedEventsData) {
      try {
        const eventsListData = JSON.parse(eventsData);
        if (
          typeof eventsListData === "object" && // Check if it's an object
          Object.values(eventsListData).flat().every(event => // Check each event in all arrays
            typeof event.startTime === "string" && // Check if startTime is a string
            typeof event.endTime === "string" && // Check if endTime is a string
            typeof event.color === "string" && // Check if color is a string
            typeof event.title === "string" && // Check if title is a string
            /^\d{2}:\d{2}$/.test(event.startTime) && // Check startTime format
            /^\d{2}:\d{2}$/.test(event.endTime) // Check endTime format
          )
        ) {
          console.log("eventsListData", eventsListData, importEvents)
          dispatch(importEvents(eventsListData));
          setshowImportTextbox(!showImportTextbox);
          setEventsData("");
  
        } else {
          toast.error("Input must be an array of objects with valid event structure.", {
            autoClose: 5000,
          });
          setEventsData("");
        }
      } catch (error) {
        toast.error("Invalid event data format. Please ensure it's valid JSON.", {
          autoClose: 5000,
        });
        setEventsData("");
      }
      
    } else {
      toast.error("Events input field must be valid", {
        autoClose: 3000,
      });
      setEventsData("");
    }
  };
  return (
    <div className="font-tenon event-card p-4  pt-5 bg-liteGreen rounded-md border border-customGreen mb-8 ">
        <div className="flex flex-col space-y-2 px-4">
          <textarea
            value={eventsData}
            onChange={handleInputChange}
            placeholder="Paste events data here..."
            rows={5}
            cols={50}
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          />
          <div className="flex space-x-2 pt-5">
            <button
              className=" outline-none bg-blue-500 mr-2 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              onClick={onimportEventsCallback}
            >
              Save and Import
            </button>
            <button
              className="outline-none bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"
              onClick={importEventsCallback}
              id="cancel"
            >
              Cancel
            </button>
          </div>
        </div>
    </div>
  );
};

export default ImportEvents;
