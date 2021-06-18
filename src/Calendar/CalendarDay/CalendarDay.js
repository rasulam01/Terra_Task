import moment from "moment";
import "./CalendarDay.css";
import { useState, useEffect } from "react";
import { CalendarReminderCreater } from "../CalendarReminderCreater/CalendarReminderCreater";
import axios from "axios";

export const CalendarDay = ({
  date,
  reminderVisibility,
  hideReminderCreater,
  showReminderCreater,
}) => {
  const [calendar, setCalendar] = useState([]);
  const [value, setValue] = useState(moment());
  const [backendData, setBackendData] = useState([]);
  const [back, setBack] = useState('')

  window.moment = moment;
  moment.updateLocale("en", { week: { dow: 1 } });

  const API_URL = "http://localhost:8000";
  const token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwiZXhwIjoxNjI0MTI3NTM0fQ.2qreSks7hR6t6601-JaM2YPXdLghbRTSeQR4GZCF8rM";
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
    console.log(res.data);
    console.log(result);
    console.log(backendData);
    return await res.data;
  };

  useEffect(() => {
    const temporary = [];
    const startingDay = value.clone().startOf("day").subtract(1, "hour");
    const endingDay = value.clone().endOf("day").subtract(1, "hour");

    while (startingDay.isBefore(endingDay, "hour")) {
      temporary.push(
        Array(24)
          .fill(0)
          .map(() => startingDay.add(1, "hour").clone())
      );

      setCalendar(temporary);
      getData("calendar/month/");
    }
  }, [date]);

  console.log(calendar);
  console.log(calendar.map((week) => week.map((day) => day.format("HH:mm"))));
  console.log(backendData);

  return (
    <div className="calendarDay">
      <div className="calendarDayDate">
        {date.format("dddd")}, {date.format("MMMM")}{" "}
        <span className="currentDay">{date.format("Do")}</span>
      </div>

      <div className="calendarDayTimeBlock">
        {calendar.map((week) =>
          week.map((day) => (
            <span className="calendarDayTimeBlockData">
              {day.format("HH:mm")}
            </span>
          ))
        )}
        <div className="calendarBackendBlockData">
          {backendData.map((end, i) => {
            let getId = () => {
              setBack(i);
              console.log(end.id);
              console.log(back);
              console.log(end[i]);
              console.log(i);
            };
            let classes = [];
            if (end.sphere.title === "Здоровье и спорт") classes.push("health");
            if (end.sphere.title === "Бизнес и карьера")
              classes.push("business");
            if (end.sphere.title === "Семья и любовь") classes.push("family");
            if (end.sphere.title === "Личный рост") classes.push("personal");
            if (end.sphere.title === "Инвестиции") classes.push("finances");
            if (end.sphere.title === "Окружение и друзья") classes.push("friends");
              
            if (end.sphere.title === "Яркость жизни") classes.push("life");
            if (end.sphere.title === "Благотворительность") classes.push("charity");
             return ( 
            end.start_date.slice(8, 10) === date.format("DD", "day") ? (
              <div key={i} onClick={showReminderCreater} className={classes.join(" ")}>
                <div onClick={getId}>{end.title}</div>
              </div>
            ) : null);
          })}
        </div>
      </div>

      {reminderVisibility ? (
        <>
          <CalendarReminderCreater hideReminderCreater={hideReminderCreater} id={backendData[back]} />
          <div className="cover" onClick={hideReminderCreater} />
        </>
      ) : null}
    </div>
  );
};
