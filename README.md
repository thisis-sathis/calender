
# Calendar App

## Overview

The Calendar App is a web-based application designed to manage events efficiently. It allows users to import supported event types, view events, navigate through multiple events, and add new events with customized details.

## Features

- **Import Supported Events**: Users can import events of supported types into the calendar.
- **View Events**: Events are displayed on the calendar, enabling users to view their schedules easily.
- **Multiple Events Navigation**: Previous and next buttons facilitate navigation between multiple events.
- **Add Events**: Users can add new events to the calendar by providing event details such as title, time, date, and color.

## Installation

To use the Calendar App, follow these steps:

1. Clone the repository: `git clone https://github.com/thisis-sathis/calender.git`
2. Navigate to the project directory: `cd calendar`
3. Open `index.html` in a web browser.

## Usage

### Importing Events

To import events into the calendar, follow these steps:

1. Locate the supported events type data.
2. Use the provided data to import events into the calendar.

### Viewing Events

Once events are imported, they will be displayed on the calendar. Users can navigate through multiple events using the previous and next buttons.

### Adding Events

To add new events to the calendar, follow these steps:

1. Click on the "Add Events" button.
2. Provide the following details for the event:
   - Title: Enter a descriptive title for the event.
   - Time: Specify the start and end times for the event.
   - Date: Choose the date for the event.
   - Color: Select a color for the event to distinguish it from others.
3. Click "Save" to add the event to the calendar.

## Example

Below is an example of supported events type data that can be imported into the Calendar App:

**Mock json available on the mock folder inside mockEvents.json**

```json
{
  "12-05-2024": [
    {
      "startTime": "08:00",
      "endTime": "09:00",
      "color": "#f6be23",
      "title": "Morning Meeting"
    },
    // Additional events for the specified date...
  ],
  "15-05-2024": [
    {
      "startTime": "05:00",
      "endTime": "09:00",
      "color": "#f6ce23",
      "title": "Client Meeting"
    },
    // Additional events for the specified date...
  ],
  // Events for other dates...
}
```




## Contact

For any inquiries or feedback, please reach out to Sathiskumar G at [thisissathiskumar@gmail.com](mailto:thisissathiskumar@gmail.com).

