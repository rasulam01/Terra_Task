import './CalendarWeek.css'
import moment from 'moment'
import { useState, useEffect } from 'react'
import { CalendarReminderCreater } from '../CalendarReminderCreater/CalendarReminderCreater'
import axios from 'axios'

export const CalendarWeek = ({date, reminderVisibility, hideReminderCreater, showReminderCreater}) => {
    const [calendar, setCalendar] = useState([])
    const [value, setValue] = useState(moment())
    const [backendData, setBackendData] = useState([])

    window.moment = moment
    moment.updateLocale("en", { week: { dow: 1 } });
    const startingWeek = value.clone().startOf('week').startOf('day')
    const endingWeek = value.clone().endOf('week').endOf('day')

    const API_URL = 'http://localhost:8000';
  const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwiZXhwIjoxNjIzNzYyNDk0fQ.giBCkhT-hPwlD6mKNZPiERD_r0zmROs8GJX0xyg3Qm0'
  const getData = async(urll) => {
      const url = `${API_URL}/api/v1/${urll}`;
      const res = await axios({
          method: 'get',
          url: url,
          // data: params,
          headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
              'Authorization': 'Bearer ' + token
          },
      });
      const result = res.data
      setBackendData(result)
      console.log(res.data);
      console.log(backendData);
      return await res.data;
      
  }
    

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
      getData('calendar/month/') 
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
                  {backendData.map((end) => 
                  
                  
                  end.start_date.slice(8, 10) === day.format('D', 'day') || end.start_date.slice(9, 10) === day.format('D', 'day') ?
                    
                    
                    <div className="dataWeek" key={end.id} onClick={showReminderCreater}>
                      {end.event.title}
                    </div> : null )}
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