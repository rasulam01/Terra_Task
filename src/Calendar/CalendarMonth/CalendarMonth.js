import "./CalendarMonth.css";
import moment from "moment";
import { useState, useEffect } from "react";
import { CalendarReminderCreater } from '../CalendarReminderCreater/CalendarReminderCreater'
import axios from 'axios'

export const CalendarMonth = ({date, reminderVisibility, hideReminderCreater, showReminderCreater}) => {
  const [calendar, setCalendar] = useState([]);
  const [value, setValue] = useState(moment());
  const [backendData, setBackendData] = useState([])
  const [back, setBack] = useState([])
  

  window.moment = moment;
  moment.updateLocale("en", { week: { dow: 1 } });
  const startingDay = date.clone().startOf("month").startOf("week");
  const endingDay = date.clone().endOf("month").endOf("week");
  
  
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
  // const getBackend = async(id) => {
  //   const url = `${API_URL}/api/v1/calendar/month/${id}`;
  //   const res = await axios({
  //     method: 'get',
  //     url: url,
  //     headers: {
  //       'Content-Type': 'application/x-www-form-urlencoded',
  //       'Authorization': 'Bearer ' + token
  //     }
  //   })
  //   const result = res.data
  //   setBack(result)
  //   console.log(res.data);
  //   console.log(back);
  //   return await res.data
  // }
  console.log(moment().date())
  

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
    getData(`calendar/month/`)
    
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
                  
                  {backendData.map((end) => 
                  
                  
                  end.start_date.slice(8, 10) === day.format('D', 'day') || end.start_date.slice(9, 10) === day.format('D', 'day') ?
                    
                    
                    <div className="data" key={end.id} onClick={showReminderCreater}>
                      {end.event.title}
                    </div> : null
                    
                  )}
                  
                </div>
                  
                
                  {/* {backendData.map((end) => (
                    
                    <div className={
                      day.day() === 6 || day.day() === 0 ? "weekEndData" : "data"
                    } key={end.id} onClick={showReminderCreater} >
                      <div className="dataBlock">
                        <span className="back">{end.id}</span>
                        
                      </div>
                      
                      
                      
                      
                      
                    </div>
                  ))} */}
                
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
