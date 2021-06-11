import moment from 'moment'
import './CalendarDay.css'
import { useState, useEffect } from 'react'
import { CalendarReminderCreater } from '../CalendarReminderCreater/CalendarReminderCreater'

export const CalendarDay = ({date, reminderVisibility, hideReminderCreater}) => {
    const [calendar, setCalendar] = useState([])
    const [value, setValue] = useState(moment())

    window.moment = moment
    moment.updateLocale('en', {week: {dow: 1}})
    

    

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
            </div>   
            {reminderVisibility ? (<><CalendarReminderCreater hideReminderCreater={hideReminderCreater} />
            <div className="cover" onClick={hideReminderCreater}/></>) : null}
            
          
                
            
                
            </div>

        
    )
}