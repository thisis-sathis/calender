const initialState = {
    events: {},
    theme: "light",
    language: "en",
    loading: false,
  };
  
  const addEventReducer = (state, action) => {
    const { date, payload } = action;
    const existingEvents = state.events[date] || [];
    const updatedEvents = [...existingEvents, payload];
    const uniqueEvents = getUniqueEvents(updatedEvents);
    return {
      ...state,
      events: {
        ...state.events,
        [date]: uniqueEvents
      }
    };
  };
  
  const updateEventReducer = (state, action) => {
    const { date, payload } = action;
    const existingEvents = state.events[date] || [];
    const updatedEvents = existingEvents.map(event =>
      event.startTime === payload.startTime && event.endTime === payload.endTime ? payload : event
    );
    const uniqueEvents = getUniqueEvents(updatedEvents);
    return {
      ...state,
      events: {
        ...state.events,
        [date]: uniqueEvents
      }
    };
  };
  
  const getUniqueEvents = events => {
    const uniqueEvents = [];
    const eventMap = new Map();
    for (const event of events) {
      const key = `${event.startTime}-${event.endTime}`;
      if (!eventMap.has(key)) {
        eventMap.set(key, true);
        uniqueEvents.push({ ...event });
      }
    }
    return uniqueEvents;
  };
  
  const eventsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "IMPORT_EVENTS":
          
          console.log("action.payload", action.payload)
          return {
            ...state,
            events: {
              ...state.events,
              ...action.payload
            }
        };      
        case "ADD_EVENT":
      return addEventReducer(state, action);
    case "UPDATE_EVENT":
      return updateEventReducer(state, action);
    default:
      return state;
    }
  };
  
  
  export default eventsReducer;
  