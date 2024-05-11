const initialState = {
    events: {},
    theme: "light",
    language: "en",
    loading: false,
  };
  
  const eventsReducer = (state = initialState, action) => {
    switch (action.type) {
      case "UPDATE_EVENTS":
        return {
          ...state,
          events: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default eventsReducer;
  