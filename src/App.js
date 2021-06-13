import "./App.css";
import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { TotalHeader } from "./Header/TotalHeader";
import { TotalSidebarClosed } from "./Sidebar/SidebarClosed";
import { TotalSidebarOpened } from "./Sidebar/SidebarOpened";
import { MainPartWeek } from "./MainPart/MainPartWeek/MainPartWeek";
import { MainPartMonth } from "./MainPart/MainPartMonth/MainPartMonth";
import { CalendarMonth } from "./Calendar/CalendarMonth/CalendarMonth";
import { Calendar } from "./Calendar/Calendar/Calendar";
import moment from "moment";
import { CalendarHeader } from "./Calendar/CalendarHeader/CalendarHeader";
import { CalendarWeek } from "./Calendar/CalendarWeek/CalendarWeek";
import { CalendarDay } from "./Calendar/CalendarDay/CalendarDay";
import { AnalyticsMonth } from './MainPart/AnalyticsMonth/AnalyticsMonth'

function App() {
  const [sidebarStatusTrue, setSidebarStatus] = useState(true);
  const [createFormVisibility, setCreateFormVisibility] = useState(false);
  const [date, setDate] = useState(moment());
  const [reminderVisibility, setReminderVisibility] = useState(false);

  const showCreateForm = () => {
    setCreateFormVisibility(true);
  };
  const hideCreateForm = () => {
    setCreateFormVisibility(false);
  };

  const showSidebar = () => {
    setSidebarStatus(!sidebarStatusTrue);
  };

  const showReminderCreater = () => {
    setReminderVisibility(true);
  };
  const hideReminderCreater = () => {
    setReminderVisibility(false);
  };

  window.moment = moment;
  moment.updateLocale("en", { week: { dow: 1 } });
  const startingDay = moment().startOf("month").startOf("week");
  const endingDay = moment().endOf("month").endOf("week");

  const previousMonth = () => {
    setDate(() => date.clone().subtract(1, "month"));
  };
  const showToday = () => {
    setDate(moment());
  };
  const nextMonth = () => {
    setDate(() => date.clone().add(1, "month"));
  };

  const previousWeek = () => {
    setDate(() => date.clone().subtract(1, "week"));
  };
  
  const nextWeek = () => {
    setDate(() => date.clone().add(1, "week"));
  };

  const calendar = [];
  const day = startingDay.clone();

  while (!day.isAfter(endingDay)) {
    calendar.push(day.clone());
    day.add(1, "day");
  }

  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <Switch>
            <Route exact path={["/", "/week", "/month"]}>
              <TotalHeader sidebarStatusTrue={sidebarStatusTrue} />
            </Route>
            <Route
              exact
              path={[
                "/calendar",
                "/calendarDay",
                "/calendarWeek",
                "/calendarMonth",
              ]}
            >
              <CalendarHeader
                sidebarStatusTrue={sidebarStatusTrue}
                previousMonth={previousMonth}
                showToday={showToday}
                nextMonth={nextMonth}
                showReminderCreater={showReminderCreater}
                hideReminderCreater={hideReminderCreater}
              />
            </Route>
          </Switch>
        </header>
        <main>
          {sidebarStatusTrue ? (
            <TotalSidebarClosed logo="S" showSidebar={showSidebar} />
          ) : (
            <TotalSidebarOpened logo="Samo" showSidebar={showSidebar} />
          )}

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
            <Route exact path="/calendarDay">
              <CalendarDay
              date={date}
              reminderVisibility={reminderVisibility}
              hideReminderCreater={hideReminderCreater}
              />
            </Route>
            <Route exact path="/calendarWeek">
              <CalendarWeek                
                date={date}
                reminderVisibility={reminderVisibility}
                hideReminderCreater={hideReminderCreater}
              />
            </Route>
            <Route exact path="/calendarMonth">
              <CalendarMonth                
                date={date}
                reminderVisibility={reminderVisibility}
                hideReminderCreater={hideReminderCreater}
                showReminderCreater={showReminderCreater}
              />
            </Route>
          </Switch>
          
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
