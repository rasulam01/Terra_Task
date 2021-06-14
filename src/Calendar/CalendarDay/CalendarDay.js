import moment from 'moment'
import './CalendarDay.css'
import { useState, useEffect } from 'react'
import { CalendarReminderCreater } from '../CalendarReminderCreater/CalendarReminderCreater'
import axios from 'axios'

export const CalendarDay = ({date, reminderVisibility, hideReminderCreater}) => {
    const [calendar, setCalendar] = useState([])
    const [value, setValue] = useState(moment())
    const [backendData, setBackendData] = useState([])

    window.moment = moment
    moment.updateLocale('en', {week: {dow: 1}})

    const API_URL = 'http://localhost:8000';
const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwiZXhwIjoxNjIzNTg0MDE0fQ.ahrvmhE76OPhiqQ6TvVU6QNzlSAiKIhLLwANJfIw4Hk'
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
    
    

    

    useEffect(() => {
        const temporary = []
        const startingDay = value.clone().startOf('day').subtract(1, 'hour')
        const endingDay = value.clone().endOf('day').subtract(1, 'hour')

        while (startingDay.isBefore(endingDay, 'hour')) {
            temporary.push(
                
                Array(24)
                .fill(0)
                .map(() => startingDay.add(1, 'hour').clone())
            )
            
            setCalendar(temporary)
            
        }
        getData('calendar/month')
    }, [date])
    
        
    console.log(calendar);
    console.log(calendar.map((week) => (
        week.map((day) => (
            day.format('HH:mm')
        ))
    )));
                                                                                                           

    return (
        <div className="calendarDay">
            <div className="calendarDayDate">
            {date.format('dddd')},  {date.format('MMMM')} <span className="currentDay">{date.format('Do')}</span>              
            </div>
            
            <div className="calendarDayTimeBlock">
              {calendar.map((week) => (
                
                  week.map((day) => (
                      <span className="calendarDayTimeBlockData">{day.format('HH:mm')}</span>
                  ))
                
              ))}
              
              <div className="calendarBackendBlock">
              {backendData.map((data) => (
                <span className="calendarBackendBlockData" key={data.id}>{data.author}</span>
              ))}
              </div>

            </div>   
            {reminderVisibility ? (<><CalendarReminderCreater hideReminderCreater={hideReminderCreater} />
            <div className="cover" onClick={hideReminderCreater}/></>) : null}
            
          
                
            
                
            </div>

        
    )
}