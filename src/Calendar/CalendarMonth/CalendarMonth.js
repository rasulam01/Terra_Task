import './CalendarMonth.css'
import moment from 'moment'
import { useState, useEffect } from 'react'

export const CalendarMonth = () => {
    const [calendar, setCalendar] = useState([])
    const [value, setValue] = useState(moment())
    
  window.moment = moment
  moment.updateLocale('en', {week: {dow: 1}})
  const startingDay = value.clone().startOf('month').startOf('week')
  const endingDay = value.clone().endOf('month').endOf('week')
  

  
  
  
  useEffect(() => {
      const temporary = []
      const day = startingDay.clone().subtract(1, 'day')
  while (day.isBefore(endingDay, 'day')) {
    temporary.push(
        Array(7).fill(0).map(() => day.add(1, 'day').clone())
    )
    
  }
  setCalendar(temporary)
  }, [value])

//   const calendar = []
  
  

  console.log(calendar);
  
    
    

    return (
        <div className="calendarMonth">
            {
            calendar.map(week => <div className="calendarMonthWeek">
                {week.map(day => 
                    <div className={value.isSame(day, "day") ? 'selected' : 'day'} onClick={() => setValue(day)}>
                        <div className={day.day() === 6 || day.day() === 0 ? 'weekEndDay' : ''}>{day.format('D')}</div>
                    </div>
                )}
            </div>)
}
        </div>
    )
}