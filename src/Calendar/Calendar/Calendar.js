import './Calendar.css'
import { CalendarMonth } from '../CalendarMonth/CalendarMonth'
import { BrowserRouter, Route, Switch} from 'react-router-dom' 
import { useState } from 'react'




export const Calendar = () => {

    
    
    
    return (
        <BrowserRouter>
        <div>            
            
                <Switch>
                    <Route exact path="/calendarDay">

                    </Route>
                    <Route exact path="/calendarWeek">

                    </Route>
                    <Route exact path="/calendarMonth">
                      <CalendarMonth />
                    </Route>
                </Switch>
                
            
        </div>
        </BrowserRouter>
    )
}