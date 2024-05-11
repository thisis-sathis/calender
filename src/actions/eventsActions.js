export const importEvents = (events) => ({
    type: "IMPORT_EVENTS",
    payload: events
});
  

export const addEvents = (date, events) => ({
  type: "ADD_EVENTS",
  payload: events,
  date: date
});
  

export const updateEvents = (date, events) => ({
  type: "UPDATE_EVENTS",
  payload: events,
  date: date
});
  