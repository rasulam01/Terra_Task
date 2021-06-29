import moment from "moment";
import "./CalendarDay.css";
import { useState, useEffect } from "react";
import { CalendarReminderCreater } from "../CalendarReminderCreater/CalendarReminderCreater";
import { CalendarReminderAdder } from '../CalendarReminderAdder/CalendarReminderAdder'
import axios from "axios";

export const CalendarDay = ({
  date,
  reminderVisibility,
  adderVisibility,  
  hideAdder,
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
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwiZXhwIjoxNjI0OTYzMzc1fQ.dtKdkrqFfPEjPZgA-NfzpIIQsE2wkV45bDCWAGAH-0w";
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
  const getClientY = (e) => {
    console.log(e.clientY);
  }
  
  return (
    <div className="calendarDay">
      <div className="calendarDayDate">
        {date.format("dddd")}, {date.format("MMMM")}{" "}
        <span className="currentDay">{date.format("Do")}</span>
      </div>

      <div className="calendarDayTimeBlock">
        {calendar.map((week, i) =>
          week.map((day) => (
            <span className="calendarDayTimeBlockData" onClick={getClientY}>
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
            let getTimeSlice = (e) => {
              console.log(end.start_date.slice(11, 16));
              
            }
            
            let timeSpan = end.start_date.slice(11, 16);
            let vertical
            let classes = [];
            if (timeSpan === '00:00') vertical = 20
            if (timeSpan === '01:00') vertical = 50
            if (timeSpan === '02:00') vertical = 80
            if (timeSpan === '03:00') vertical = 110
            if (timeSpan === '04:00') vertical = 140
            if (timeSpan === '05:00') vertical = 170
            if (timeSpan === '06:00') vertical = 200
            if (timeSpan === '07:00') vertical = 230
            if (timeSpan === '08:00') vertical = 260
            if (timeSpan === '09:00') vertical = 290
            if (timeSpan === '10:00') vertical = 320
            if (timeSpan === '11:00') vertical = 350
            if (timeSpan === '12:00') vertical = 380
            if (timeSpan === '13:00') vertical = 410
            if (timeSpan === '14:00') vertical = 440
            if (timeSpan === '15:00') vertical = 470
            if (timeSpan === '16:00') vertical = 500
            if (timeSpan === '17:00') vertical = 530
            if (timeSpan === '18:00') vertical = 560
            if (timeSpan === '19:00') vertical = 590
            if (timeSpan === '20:00') vertical = 620
            if (timeSpan === '21:00') vertical = 650
            if (timeSpan === '22:00') vertical = 680
            if (timeSpan === '23:00') vertical = 710
            
            
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
              <div key={i} onClick={showReminderCreater} onClick={getTimeSlice} className={classes.join(" ")} style={{ marginTop: end.start_date.slice(11, 16) === timeSpan ? vertical + 'px' : ''}}>
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
      {adderVisibility ? (
              <>
                <CalendarReminderAdder
                hideAdder={hideAdder}
                />
                <div className="cover"
                onClick={hideAdder}
                />
              </>
            ) : null}
    </div>
  );
};
