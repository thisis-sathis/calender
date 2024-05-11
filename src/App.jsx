import React from "react";
import Calendar from "./components/calendar/Calendar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  return (
    <div>
      <ToastContainer />
      <Calendar />
    </div>
  );
}

