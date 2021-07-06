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
import { AnalyticsMonth } from "./MainPart/AnalyticsMonth/AnalyticsMonth";
import { Goals } from "./Goals/Goals/Goals";
import { GoalsHeader } from "./Goals/GoalsHeader/GoalsHeader";

function App() {
  const [sidebarStatusTrue, setSidebarStatus] = useState(true);
  const [createFormVisibility, setCreateFormVisibility] = useState(false);
  const [date, setDate] = useState(moment());
  const [reminderVisibility, setReminderVisibility] = useState(false);
  const [adderVisibility, setAdderVisibility] = useState(false);
  const [goalCreaterVisibility, setGoalCreaterVisibility] = useState(false)

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
  const showAdder = () => {
    setAdderVisibility(true);
  };
  const hideAdder = () => {
    setAdderVisibility(false);
  };
  const showGoalCreater = () => {
    setGoalCreaterVisibility(true)
  }
  const hideGoalCreater = () => {
    setGoalCreaterVisibility(false)
  }

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
                showAdder={showAdder}
                hideAdder={hideAdder}
              />
            </Route>
            <Route exact path={["/goals", 
            "/goalsTime", 
            "/goalsBalance"]}>
              <GoalsHeader sidebarStatusTrue={sidebarStatusTrue} />
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
            <Route path="/calendarDay">
              <CalendarDay
                date={date}
                reminderVisibility={reminderVisibility}
                hideReminderCreater={hideReminderCreater}
                showReminderCreater={showReminderCreater}
                adderVisibility={adderVisibility}
                showAdder={showAdder}
                hideAdder={hideAdder}
                
              />
            </Route>
            <Route path="/calendarWeek">
              <CalendarWeek
                date={date}
                reminderVisibility={reminderVisibility}
                hideReminderCreater={hideReminderCreater}
                showReminderCreater={showReminderCreater}
                adderVisibility={adderVisibility}
                showAdder={showAdder}
                hideAdder={hideAdder}
                
              />
            </Route>
            <Route path="/calendarMonth">
              <CalendarMonth
                date={date}
                reminderVisibility={reminderVisibility}
                hideReminderCreater={hideReminderCreater}
                showReminderCreater={showReminderCreater}
                adderVisibility={adderVisibility}
                showAdder={showAdder}
                hideAdder={hideAdder}
                
              />
            </Route>
            <Route exact path={["/goals", "/goalsTime", "/goalsBalance"]}>
              <Goals sidebarStatusTrue={sidebarStatusTrue} 
              goalCreaterVisibility={goalCreaterVisibility}
              showGoalCreater={showGoalCreater}
              hideGoalCreater={hideGoalCreater}/>
            </Route>
          </Switch>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
