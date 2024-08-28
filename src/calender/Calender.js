import React, { useState, useEffect } from 'react';

const Calendar = () => {
  const [calendar, setCalendar] = useState(new Date());
  const [calendarData, setCalendarData] = useState({});
  
  const calWeekDays = [
    "SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"
  ];

  const calMonthName = [
    "January", "February", "March", "April", "May", "June", 
    "July", "August", "September", "October", "November", "December"
  ];

  const daysInMonth = (month, year) => new Date(year, month, 0).getDate();

  const firstDay = () => new Date(calendar.getFullYear(), calendar.getMonth(), 1);

  const lastDay = () => new Date(calendar.getFullYear(), calendar.getMonth() + 1, 0);

  const firstDayNumber = () => firstDay().getDay() + 1;

  const lastDayNumber = () => lastDay().getDay() + 1;

  const getPreviousMonthLastDate = () => new Date(calendar.getFullYear(), calendar.getMonth(), 0).getDate();

  const navigateToPreviousMonth = (e) => {
    e.preventDefault();
    setCalendar(new Date(calendar.setMonth(calendar.getMonth() - 1)));
  };

  const navigateToNextMonth = (e) => {
    e.preventDefault();
    setCalendar(new Date(calendar.setMonth(calendar.getMonth() + 1)));
  };

  const navigateToCurrentMonth = () => {
    const now = new Date();
    setCalendar(new Date(now.getFullYear(), now.getMonth(), now.getDate()));
  };

  const selectDate = (e, day) => {
    e.preventDefault();
    const selectedDate = new Date(calendar.getFullYear(), calendar.getMonth(), day);
    console.log('Selected Date:', selectedDate);
  };

  useEffect(() => {
    // Plot dates or fetch data when calendar state changes
    plotDates();
  }, [calendar]);

  const plotDates = () => {
    // Example placeholder for API call or date logic
    // You should replace this with your actual data fetching and processing
    setCalendarData({
      // Example data structure
      [1]: [{ status: 'active' }],
      [2]: [{ status: 'inactive' }],
      // ...
    });
  };

  return (
    <div className="calendar">
      <div className="calendar-inner">
        <div className="calendar-controls">
          <div className="calendar-prev">
            <a href="#" onClick={navigateToPreviousMonth}>
            <i className="fa fa-arrow-left border p-2 rounded"></i>
            </a>
          </div>
          <div className="calendar-year-month">
            <div className="calendar-month-label">
              {calMonthName[calendar.getMonth()]}
            </div>
            <div className="calendar-year-label">
              {calendar.getFullYear()}
            </div>
          </div>
          <div className="calendar-next">
            <a href="#" onClick={navigateToNextMonth}>
            <i className="fa fa-arrow-right border p-2 rounded"></i>

            </a>
          </div>
        </div>
        <div className="calendar-today-date">
          Today: {calWeekDays[calendar.getDay()]}, {calendar.getDate()}, {calMonthName[calendar.getMonth()]} {calendar.getFullYear()}
        </div>
        <div className="calendar-body">
          {/* Render days here */}
          {calWeekDays.map((day, i) => (
            <div key={i}>{day}</div>
          ))}
          {Array.from({ length: daysInMonth(calendar.getMonth() + 1, calendar.getFullYear()) }, (_, i) => (
            <div key={i} className={`number-item ${calendarData[i + 1] ? 'active' : ''}`} onClick={(e) => selectDate(e, i + 1)}>
              {i + 1}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
