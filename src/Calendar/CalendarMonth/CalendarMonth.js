import "./CalendarMonth.css";
import moment from "moment";
import { useState, useEffect } from "react";
import { CalendarReminderCreater } from '../CalendarReminderCreater/CalendarReminderCreater'

export const CalendarMonth = ({date, reminderVisibility, hideReminderCreater}) => {
  const [calendar, setCalendar] = useState([]);
  const [value, setValue] = useState(moment());

  window.moment = moment;
  moment.updateLocale("en", { week: { dow: 1 } });
  const startingDay = date.clone().startOf("month").startOf("week");
  const endingDay = date.clone().endOf("month").endOf("week");

  

  useEffect(() => {
    const temporary = [];
    const day = startingDay.clone().subtract(1, "day");

    while (day.isBefore(endingDay, "day")) {
      temporary.push(
        Array(7)
          .fill(0)
          .map(() => day.add(1, "day").clone())
      );
    }
    setCalendar(temporary);
  }, [date]);

  console.log(calendar);

  return (
    <>
      <div className="calendarMonth">
        <div className="calendarDate">
          {date.format("MMMM")} {date.format("YYYY")}
        </div>
        <div className="calendarMonthDayHeader">
          <div>Понедельник</div>
          <div>Вторник</div>
          <div>Среда</div>
          <div>Четверг</div>
          <div>Пятница</div>
          <div>Суббота</div>
          <div>Воскресенье</div>
        </div>
        {calendar.map((week) => (
          <div className="calendarMonthWeek">
            {week.map((day) => (
              <div
                className={value.isSame(day, "day") ? "selected" : "day"}
                onClick={() => setValue(day)}
              >
                <div
                  className={
                    day.day() === 6 || day.day() === 0 ? "weekEndDay" : ""
                  }
                >
                  <span className={date.isSame(day, 'day') ? 'today' : 'day'}>{day.format("D")}</span>
                </div>
              </div>
            ))}
            {reminderVisibility ? (<><CalendarReminderCreater hideReminderCreater={hideReminderCreater} />
            <div className="cover" onClick={hideReminderCreater}/></>) : null}
          </div>
          
        ))}
      </div>
    </>
  );
};
