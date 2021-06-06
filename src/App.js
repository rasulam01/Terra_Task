import "./App.css";
import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { TotalHeader } from "./Header/TotalHeader";
import { TotalSidebarClosed } from "./Sidebar/SidebarClosed";
import { TotalSidebarOpened } from "./Sidebar/SidebarOpened";
import { MainPartWeek } from "./MainPart/MainPartWeek/MainPartWeek";
import { MainPartMonth } from "./MainPart/MainPartMonth/MainPartMonth";
import { CalendarMonth } from './Calendar/CalendarMonth/CalendarMonth'
import { Calendar } from './Calendar/Calendar/Calendar'
import moment from 'moment'
import { CalendarHeader } from "./Calendar/CalendarHeader/CalendarHeader";


function App() {
  const [sidebarStatusTrue, setSidebarStatus] = useState(true);
  const [createFormVisibility, setCreateFormVisibility] = useState(false);

  const showCreateForm = () => {
    setCreateFormVisibility(true);
  };
  const hideCreateForm = () => {
    setCreateFormVisibility(false);
  };

  const showSidebar = () => {
    setSidebarStatus(!sidebarStatusTrue);
  };

  window.moment = moment
  moment.updateLocale('en', {week: {dow: 1}})
  const startingDay = moment().startOf('month').startOf('week')
  const endingDay = moment().endOf('month').endOf('week')

  window.startingDay = startingDay
  window.endingDay = endingDay
  
  
  console.log(startingDay.format("YYYY-MM-DD"));
  console.log(endingDay.format("YYYY-MM-DD"));

  const calendar = []
  const day = startingDay.clone()

  while (!day.isAfter(endingDay)) {
    calendar.push(day.clone())
    day.add(1, 'day')
  }
  console.log(calendar);

  
  

  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <Switch>
            <Route exact path={["/", "/week", "/month"]}>
              <TotalHeader sidebarStatusTrue={sidebarStatusTrue} />
            </Route>
            <Route exact path={["/calendar", "/calendarDay", "/calendarWeek", "/calendarMonth"]}>
              <CalendarHeader sidebarStatusTrue={sidebarStatusTrue} />
            </Route>
          </Switch>
          
        </header>
        <main>
          {sidebarStatusTrue ? (
            <TotalSidebarClosed logo="S" showSidebar={showSidebar} />
          ) : (
            <TotalSidebarOpened logo="Samo" showSidebar={showSidebar} />
          )}
          <CalendarMonth />
        


          <Switch>
            <Route exact path="/week">
              <MainPartWeek
                showCreateForm={showCreateForm}
                hideCreateForm={hideCreateForm}
                createFormVisibility={createFormVisibility}
              />
            </Route>
            <Route exact path="/month">
              <MainPartMonth
                showCreateForm={showCreateForm}
                hideCreateForm={hideCreateForm}
                createFormVisibility={createFormVisibility}
              />
            </Route>
            <Route path="/calendarMonth">
              <CalendarMonth sidebarStatusTrue={sidebarStatusTrue} />
            </Route>
          </Switch>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
