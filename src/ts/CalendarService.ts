namespace CalendarService {
    export interface EventData {
      calendarId: string;
      title: string;
      startTime: Date;
      endTime: Date;
      description?: string;
      location?: string;
      guests?: string[];
      sendInvites?: boolean;
    }
  
    // Function to create a calendar event
    export function createCalendarEvent(params: EventData): GoogleAppsScript.Calendar.CalendarEvent {
      const { calendarId, title, startTime, endTime, description, location, guests, sendInvites } = params;
      const calendar = CalendarApp.getCalendarById(calendarId);
      const event = calendar.createEvent(title, startTime, endTime, {
        description: description,
        location: location,
        guests: guests,
        sendInvites: sendInvites
      });
      return event;
    }
  
    // Function to get events from a calendar
    export function getCalendarEvents(calendarId: string, startTime: Date, endTime: Date): GoogleAppsScript.Calendar.CalendarEvent[] {
      const calendar = CalendarApp.getCalendarById(calendarId);
      const events = calendar.getEvents(startTime, endTime);
      return events;
    }
  
    // Function to update a calendar event
    export function updateCalendarEvent(eventId: string, params: EventData): void {
      const { calendarId, title, startTime, endTime, description, location, guests, sendInvites } = params;
      const calendar = CalendarApp.getCalendarById(calendarId);
      const event = calendar.getEventById(eventId);
      if (event) {
        event.setTitle(title);
        event.setTime(startTime, endTime);
        event.setDescription(description);
        event.setLocation(location);
        event.removeAllReminders();
        if (guests) {
          event.addGuest(guests.join(','));
        }
        if (sendInvites) {
          event.addEmailReminder(15); // Example: Add a 15-minute email reminder
        }
      }
    }
  
    // Function to delete a calendar event
    export function deleteCalendarEvent(calendarId: string, eventId: string): void {
      const calendar = CalendarApp.getCalendarById(calendarId);
      const event = calendar.getEventById(eventId);
      if (event) {
        event.deleteEvent();
      }
    }
  
    // Function to get a calendar by ID
    export function getCalendarById(calendarId: string): GoogleAppsScript.Calendar.Calendar {
      return CalendarApp.getCalendarById(calendarId);
    }
  
    // Function to create a new calendar
    export function createCalendar(name: string): GoogleAppsScript.Calendar.Calendar {
      return CalendarApp.createCalendar(name);
    }
  
    // Function to delete a calendar
    export function deleteCalendar(calendarId: string): void {
      const calendar = CalendarApp.getCalendarById(calendarId);
      if (calendar) {
        calendar.deleteCalendar();
      }
    }
  }
  