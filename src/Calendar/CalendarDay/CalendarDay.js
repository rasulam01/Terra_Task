import moment from 'moment'
import './CalendarDay.css'
import { useState, useEffect } from 'react'

export const CalendarDay = ({date, reminderVisiblity, hideReminderCreater}) => {
    const [calendar, setCalendar] = useState([])
    const [value, setValue] = useState(moment())

    window.moment = moment
    moment.updateLocale('en', {week: {dow: 1}})
    

    

    useEffect(() => {
        const temporary = []
        const startingDay = value.clone().startOf('day').subtract(1, 'hour')
        const endingDay = value.clone().endOf('day').subtract(1, 'hour')

        while (startingDay.isBefore(endingDay)) {
            temporary.push(
                Array(24)
                .fill(0)
                .map(() => startingDay.add(1, 'hour').clone())
            )
            setCalendar(temporary)
        }
    }, [date])
    console.log(calendar);
    return (
        <div className="calendarDay">
            <div className="calendarDate">
                {date.format('MMMM')} <span className="currentDay">{date.format('Do')}</span>
                
            </div>
            <div className="calendarDateTime">
                {console.log(calendar.map((week) => {
                    
                        {week.map((day) => {
                             {date.format('hh:mm')}
                        })}
                    
                }))}
            
                {calendar.map((week) => {
                    <div className="calendarDateTimeBlock">
                        {week.format('hh:mm')}
                        {/* {week.map((day) => {
                            <span className="calendarDateTimeBlockData">{day.format('hh:mm')}</span>
                        })} */}
                    </div>
                })}
            </div>

        </div>
    )
}