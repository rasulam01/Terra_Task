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
  
  hideReminderCreater,
  showReminderCreater,
}) => {
  const [calendar, setCalendar] = useState([]);
  const [hours, setHours] = useState([])
  const [value, setValue] = useState(moment());
  const [backendData, setBackendData] = useState([]);
  const [back, setBack] = useState("");

  window.moment = moment;
  moment.updateLocale("en", { week: { dow: 1 } });
  const startingWeek = value.clone().startOf("week").startOf("day");
  const endingWeek = value.clone().endOf("week").endOf("day");

  const API_URL = "http://localhost:8000";
  const token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwiZXhwIjoxNjI1ODI3MDM2fQ.Flosc9Ev9IRGQXNR-kp-O1N5qsWPrIoSJL5SQ5n_cRg";
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
    const temporaryHours = [];
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
    while (hour.isBefore(endHour, 'hour')) {
      temporaryHours.push(
      Array(24)
      .fill(0)
      .map(() => hour.add(1, 'hour').clone())
      );
      setHours(temporaryHours)
      
      
    }
    
    
  }, [date]);

  const y = (e) => {
    console.log(e.clientY);
  }

  

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
        <div className="calendarDayTimeBlockWeek">
        {hours.map((week) =>
          week.map((day) => (
            <span className="calendarDayTimeBlockData">
              {day.format("HH:mm")}
            </span>
          ))
        )}
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

                  let timeSpan = end.start_date.slice(11, 13);
                  let vertical;
                  let longitude;
                  let startHourPiece = end.start_date.slice(11, 13);
                  let endHourPiece = end.end_date.slice(11, 13);
                  let hourDifference = endHourPiece - startHourPiece;
                  let classes = [];
                  if (timeSpan === "00") vertical = 20;
                  if (timeSpan === "01") vertical = 40;
                  if (timeSpan === "02") vertical = 60;
                  if (timeSpan === "03") vertical = 80;
                  if (timeSpan === "04") vertical = 100;
                  if (timeSpan === "05") vertical = 120;
                  if (timeSpan === "06") vertical = 140;
                  if (timeSpan === "07") vertical = 160;
                  if (timeSpan === "08") vertical = 180;
                  if (timeSpan === "09") vertical = 200;
                  if (timeSpan === "10") vertical = 220;
                  if (timeSpan === "11") vertical = 240;
                  if (timeSpan === "12") vertical = 260;
                  if (timeSpan === "13") vertical = 280;
                  if (timeSpan === "14") vertical = 300;
                  if (timeSpan === "15") vertical = 320;
                  if (timeSpan === "16") vertical = 340;
                  if (timeSpan === "17") vertical = 360;
                  if (timeSpan === "18") vertical = 380;
                  if (timeSpan === "19") vertical = 400;
                  if (timeSpan === "20") vertical = 420;
                  if (timeSpan === "21") vertical = 440;
                  if (timeSpan === "22") vertical = 460;
                  if (timeSpan === "23") vertical = 480;

                  if (hourDifference === 2) longitude = 60;
                  if (hourDifference === 3) longitude = 80;
                  if (hourDifference === 4) longitude = 100;
                  if (hourDifference === 5) longitude = 120;
                  if (hourDifference === 6) longitude = 140;
                  if (hourDifference === 7) longitude = 160;
                  if (hourDifference === 8) longitude = 180;
                  if (hourDifference === 9) longitude = 200;
                  if (hourDifference === 10) longitude = 220;
                  if (hourDifference === 11) longitude = 240;
                  if (hourDifference === 12) longitude = 260;
                  if (hourDifference === 13) longitude = 280;
                  if (hourDifference === 14) longitude = 300;
                  if (hourDifference === 15) longitude = 320;


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
                      style={{
                        position: "sticky",
                        top:
                          end.start_date.slice(11, 13) === timeSpan
                            ? vertical + "px"
                            : "",
                        height: longitude,
                        
                      }}
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
