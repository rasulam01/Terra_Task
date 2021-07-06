import "./CalendarWeek.css";
import moment from "moment";
import { useState, useEffect } from "react";
import { CalendarReminderCreater } from "../CalendarReminderCreater/CalendarReminderCreater";
import { CalendarReminderAdder } from '../CalendarReminderAdder/CalendarReminderAdder'
import axios from "axios";

export const CalendarWeek = ({
  date,
  reminderVisibility,
  adderVisibility,  
  hideAdder,
  hyper,
  hideReminderCreater,
  showReminderCreater,
}) => {
  const [calendar, setCalendar] = useState([]);
  const [value, setValue] = useState(moment());
  const [backendData, setBackendData] = useState([]);
  const [back, setBack] = useState("");

  window.moment = moment;
  moment.updateLocale("en", { week: { dow: 1 } });
  const startingWeek = value.clone().startOf("week").startOf("day");
  const endingWeek = value.clone().endOf("week").endOf("day");

  const API_URL = "http://localhost:8000";
  const token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwiZXhwIjoxNjI1NTgwMDk0fQ.drPf4CCmMCCHjsFKdYqRIA8dP4z8_DhjxF1Up1JQ9OA";
  const getData = async (urll) => {
    const url = `${API_URL}/api/v1/${urll}`;
    const res = await axios({
      method: "get",
      url: url,
      // data: params,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Bearer " + token,
      },
    });
    const result = res.data;
    setBackendData(result);
    
    return await res.data;
  };
  

  

  useEffect(() => {
    const temporary = [];
    const week = startingWeek.clone().subtract(1, "day");
    const endWeek = endingWeek.clone().subtract(1, "day");
    const hour = value.clone().startOf('day').subtract(1, 'hour')
    const endHour = value.clone().endOf('day').subtract(1, 'hour')

    while (week.isBefore(endWeek)) {
      temporary.push(
        Array(7)
          .fill(0)
          .map(() => week.add(1, "day").clone())
      );
      setCalendar(temporary);
      getData("calendar/month/");
    }
    
  }, [value]);

  

  return (
    <>
      <div className="calendarWeek">
        <div className="calendarMonthDayHeader">
          <div>Понедельник</div>
          <div>Вторник</div>
          <div>Среда</div>
          <div>Четверг</div>
          <div>Пятница</div>
          <div>Суббота</div>
          <div>Воскресенье</div>
        </div>
        {calendar.map((week, i) => (
          <div className="calendarMonthWeek">
            {week.map((day, i) => (
              
              <div className="dayWeek" onClick={() => setValue(day)}>
                <div className="digit">{day.format("D")}</div>

                {backendData.map((end, i) => {
                  let getId = () => {
                    setBack(i);
                    console.log(end.id);
                    console.log(back);
                    console.log(end[i]);
                    console.log(i);
                  };
                  let classes = [];
                  if (end.sphere.title === "Здоровье и спорт")
                    classes.push("health");
                  if (end.sphere.title === "Бизнес и карьера")
                    classes.push("business");
                  if (end.sphere.title === "Семья и любовь")
                    classes.push("family");
                  if (end.sphere.title === "Личный рост")
                    classes.push("personal");
                  if (end.sphere.title === "Инвестиции")
                    classes.push("finances");
                  if (end.sphere.title === "Окружение и друзья")
                    classes.push("friends");
                  if (end.sphere.title === "Яркость жизни")
                    classes.push("life");
                  if (end.sphere.title === "Благотворительность")
                    classes.push("charity");
                  return end.start_date.slice(8, 10) ===
                    day.format("DD", "day") ? (
                    <div
                      className={classes.join(" ")}
                      key={i}
                      onClick={showReminderCreater}
                    >
                      <div onClick={getId}>{end.title}</div>
                    </div>
                  ) : null;
                })}
              </div>
            ))}
            {reminderVisibility ? (
              <>
                <CalendarReminderCreater
                  hideReminderCreater={hideReminderCreater}
                  id={backendData[back]}
                />
                <div className="cover" onClick={hideReminderCreater} />
              </>
            ) : null}
            {adderVisibility ? (
              <>
                <CalendarReminderAdder
                hideAdder={hideAdder}
                hyper="/calendarWeek"
                />
                <div className="cover"
                onClick={hideAdder}
                />
              </>
            ) : null}
          </div>
        ))}
      </div>
    </>
  );
};
