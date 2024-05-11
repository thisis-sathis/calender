import { combineReducers } from "redux";
import eventsReducer from "./eventsReducer";

const rootReducer = combineReducers({
  eventsDetails: eventsReducer,
});

export default rootReducer;
