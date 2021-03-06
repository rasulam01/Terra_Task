import "./CalendarHeader.css";
import UserImage from "../../Assets/image.jpg";
import MagnifyingGlass from "../../Assets/search.svg";
import Bell from "../../Assets/Bells.svg";
import { NavLink } from "react-router-dom";
import CalendarAdd from "../../Assets/CalendarAdd.png";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import calendarLeftArrow from '../../Assets/CalendarArrowLeft.png'
// import calendarCenter from '../../Assets/CalendarCenter.png'
// import calendarRightArrow from '../../Assets/CalendarArrowRight.png'
// import calendarDateSwitch from '../../Assets/CalendarSwitchDate.png'
import { useState } from "react";
import moment from "moment";

export const CalendarHeader = ({
  
  sidebarStatusTrue,
  previousMonth,
  showToday,
  nextMonth,
  showAdder,
  previousWeek,
  nextWeek,
  previousDay,
  nextDay,
}) => {
  return (
    <div className="totalHeader">
      <div className={sidebarStatusTrue ? "totalBlock" : "totalBlockOpened"}>
        Календарь
      </div>
      <div className="totalTimeSpans">
        <div className="calendarFeatures">
          <div className="calendarAdd">
            <img src={CalendarAdd} alt="Add" onClick={showAdder} />
          </div>
          <Switch>
            <Route exact path="/calendarDay">
              <div className="calendarSwitchDate">
                <button onClick={previousDay}>{"<"}</button>
                <button onClick={showToday}>Сегодня</button>
                <button onClick={nextDay}>{">"}</button>
              </div>
            </Route>
            <Route exact path="/calendarWeek">
              <div className="calendarSwitchDate">
                <button onClick={previousWeek}>{"<"}</button>
                <button onClick={showToday}>Сегодня</button>
                <button onClick={nextWeek}>{">"}</button>
              </div>
            </Route>
            <Route exact path="/calendarMonth">
              <div className="calendarSwitchDate">
                <button onClick={previousMonth}>{"<"}</button>
                <button onClick={showToday}>Сегодня</button>
                <button onClick={nextMonth}>{">"}</button>
              </div>
            </Route>
          </Switch>
        </div>
        <div className="calendarTimeSpansDay">
          <NavLink activeClassName="totalTimeSpansSelected" to="/calendarDay">
            День
          </NavLink>
        </div>
        <div className="calendarTimeSpansWeek">
          <NavLink activeClassName="totalTimeSpansSelected" to="/calendarWeek">
            Неделя
          </NavLink>
        </div>
        <div className="calendarTimeSpansMonth">
          <NavLink activeClassName="totalTimeSpansSelected" to="/calendarMonth">
            Месяц
          </NavLink>
        </div>
        <div className="search">
          <div className="searchCircle">
            <img src={MagnifyingGlass} alt="Create" />
          </div>
        </div>
        <div className="bell">
          <div className="bellNotified">
            <img src={Bell} alt="Create" />
          </div>
        </div>
        <div className="user">
          <div className="userName">
            <p>Chryssalid</p>
          </div>
          <div className="userImage">
            <img src={UserImage} alt="Create" />
          </div>
        </div>
      </div>
    </div>
  );
};
