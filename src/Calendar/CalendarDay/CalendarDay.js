import moment from "moment";
import "./CalendarDay.css";
import { useState, useEffect } from "react";
import { CalendarReminderCreater } from "../CalendarReminderCreater/CalendarReminderCreater";
import { CalendarReminderAdder } from "../CalendarReminderAdder/CalendarReminderAdder";
import axios from "axios";

export const CalendarDay = ({
  date,
  reminderVisibility,
  adderVisibility,
  hideAdder,
  hideReminderCreater,
  showReminderCreater,
  hyper,
}) => {
  const [calendar, setCalendar] = useState([]);
  const [value, setValue] = useState(moment());
  const [backendData, setBackendData] = useState([]);
  const [back, setBack] = useState("");

  window.moment = moment;
  moment.updateLocale("en", { week: { dow: 1 } });

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
  };

  return (
    <div className="calendarDay">
      <div className="calendarDayDate">
        {date.format("dddd")}, {date.format("MMMM")}{" "}
        <span className="currentDay">{date.format("Do")}</span>
      </div>

      <div className="calendarDayTimeBlock">
        {calendar.map((week) =>
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
            
            

            let timeSpan = end.start_date.slice(11, 13);
            let vertical;
            let longitude;
            let startHour = end.start_date.slice(11, 13);
            let endHour = end.end_date.slice(11, 13);
            let hourDifference = endHour - startHour;
            let classes = [];
            if (timeSpan === "00") vertical = 0;
            if (timeSpan === "01") vertical = 50;
            if (timeSpan === "02") vertical = 83;
            if (timeSpan === "03") vertical = 116;
            if (timeSpan === "04") vertical = 149;
            if (timeSpan === "05") vertical = 182;
            if (timeSpan === "06") vertical = 215;
            if (timeSpan === "07") vertical = 248;
            if (timeSpan === "08") vertical = 281;
            if (timeSpan === "09") vertical = 314;
            if (timeSpan === "10") vertical = 347;
            if (timeSpan === "11") vertical = 380;
            if (timeSpan === "12") vertical = 413;
            if (timeSpan === "13") vertical = 446;
            if (timeSpan === "14") vertical = 479;
            if (timeSpan === "15") vertical = 512;
            if (timeSpan === "16") vertical = 545;
            if (timeSpan === "17") vertical = 578;
            if (timeSpan === "18") vertical = 611;
            if (timeSpan === "19") vertical = 644;
            if (timeSpan === "20") vertical = 677;
            if (timeSpan === "21") vertical = 710;
            if (timeSpan === "22") vertical = 743;
            if (timeSpan === "23") vertical = 776;

            if (hourDifference === 2) longitude = 85;
            if (hourDifference === 3) longitude = 115;
            if (hourDifference === 4) longitude = 145;
            if (hourDifference === 5) longitude = 175;
            if (hourDifference === 6) longitude = 205;
            if (hourDifference === 7) longitude = 235;
            if (hourDifference === 8) longitude = 265;
            if (hourDifference === 9) longitude = 295;
            if (hourDifference === 10) longitude = 325;
            if (hourDifference === 11) longitude = 355;
            if (hourDifference === 12) longitude = 385;
            if (hourDifference === 13) longitude = 415;
            if (hourDifference === 14) longitude = 445;
            if (hourDifference === 15) longitude = 475;

            if (end.sphere.title === "Здоровье и спорт") classes.push("health");
            if (end.sphere.title === "Бизнес и карьера")
              classes.push("business");
            if (end.sphere.title === "Семья и любовь") classes.push("family");
            if (end.sphere.title === "Личный рост") classes.push("personal");
            if (end.sphere.title === "Инвестиции") classes.push("finances");
            if (end.sphere.title === "Окружение и друзья")
              classes.push("friends");

            if (end.sphere.title === "Яркость жизни") classes.push("life");
            if (end.sphere.title === "Благотворительность")
              classes.push("charity");
            return end.start_date.slice(8, 10) === date.format("DD", "day") ? (
              <div
                key={i}
                onClick={showReminderCreater}
                
                className={classes.join(" ")}
                style={{
                  position: "absolute",
                  top:
                    end.start_date.slice(11, 13) === timeSpan
                      ? vertical + "px"
                      : "",
                  height: longitude,
                  
                }}
              >
                <div onClick={getId} className="dataText">{end.title}</div>
              </div>
            ) : null;
          })}
        </div>
      </div>

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
          <CalendarReminderAdder hideAdder={hideAdder} hyper="/calendarDay"/>
          <div className="cover" onClick={hideAdder} />
        </>
      ) : null}
    </div>
  );
};
