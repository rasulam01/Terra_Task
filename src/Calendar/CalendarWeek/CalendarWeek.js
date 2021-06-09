import './CalendarWeek.css'
import moment from 'moment'
import { useState, useEffect } from 'react'
import { CalendarReminderCreater } from '../CalendarReminderCreater/CalendarReminderCreater'

export const CalendarWeek = ({date, reminderVisibility, hideReminderCreater}) => {
    const [calendar, setCalendar] = useState([])
    const [value, setValue] = useState(moment())

    window.moment = moment
    moment.updateLocale("en", { week: { dow: 1 } });
    const startingWeek = value.clone().startOf('week').startOf('day')
    const endingWeek = value.clone().endOf('week').endOf('day')

    console.log(startingWeek);
    console.log(endingWeek);

    useEffect(() => {
      const temporary = []
      const week = startingWeek.clone().subtract(1, 'day')
      const endWeek = endingWeek.clone().subtract(1, 'day')

    while (week.isBefore(endWeek)) {
        temporary.push(
            Array(7)
            .fill(0)
            .map(() => week.add(1, 'day').clone())
        )
      setCalendar(temporary)  
    }  
    
    }, [value])
    
    console.log(calendar)

    return (
        <>

        <div className="calendarWeek">
        <div className="calendarDate">
          {date.format("MMMM")} 
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
                className={value.isSame(day, "day") ? "selectedWeek" : "dayWeek"}
                onClick={() => setValue(day)}
              >
                <div
                  className={
                    day.day() === 6 || day.day() === 0 ? "weekEndWeek" : ""
                  }
                >
                  <span className={date.isSame(day, 'day') ? 'today' : 'dayWeek'}>{day.format("D")}</span>
                </div>
              </div>
            ))}
            {reminderVisibility ? (<><CalendarReminderCreater hideReminderCreater={hideReminderCreater} />
            <div className="cover" onClick={hideReminderCreater}/></>) : null}
          </div>
          
        ))}
      </div>
        

      
        </>
        
    )
}