import "./CalendarMonth.css";
import moment from "moment";
import { useState, useEffect } from "react";
import { CalendarReminderCreater } from "../CalendarReminderCreater/CalendarReminderCreater";
import { CalendarReminderAdder } from '../CalendarReminderAdder/CalendarReminderAdder'
import axios from "axios";

export const CalendarMonth = ({
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
  const [back, setBack] = useState('');

  window.moment = moment;
  moment.updateLocale("en", { week: { dow: 1 } });
  const startingDay = date.clone().startOf("month").startOf("week");
  const endingDay = date.clone().endOf("month").endOf("week");

  const API_URL = "http://localhost:8000";
  const token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwiZXhwIjoxNjI1OTEzOTM5fQ.DdPSnvQR85W2m_GtTCv59jHS5Zy-ZTtAcxTTSo-q6O8";
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
    
    return await res.data;
  };

  
  // const getBackend = async(id) => {
  //   const url = `${API_URL}/api/v1/calendar/month/${id}`;
  //   const res = await axios({
  //     method: 'get',
  //     url: url,
  //     headers: {
  //       'Content-Type': 'application/x-www-form-urlencoded',
  //       'Authorization': 'Bearer ' + token
  //     }
  //   })
  //   const result = res.data
  //   setBack(result)
  //   console.log(res.data);
  //   console.log(back);
  //   return await res.data
  // }

  
  

  useEffect(() => {
    const temporary = [];
    const day = startingDay.clone().subtract(1, "day");

    console.log(day.format("DD", "day"));
    console.log(day.format("MM", "month"));
    console.log(day.format("YYYY", "year"));
    console.log(day.format());

    while (day.isBefore(endingDay, "day")) {
      temporary.push(
        Array(7)
          .fill(0)
          .map(() => day.add(1, "day").clone())
      );
    }
    setCalendar(temporary);
    getData(`calendar/month/`);
  }, [date]);

  
  

  return (
    <>
      <div className="calendarMonth">
        <div className="calendarMonthDayHeader">
          <div>??????????????????????</div>
          <div>??????????????</div>
          <div>??????????</div>
          <div>??????????????</div>
          <div>??????????????</div>
          <div>??????????????</div>
          <div>??????????????????????</div>
        </div>
        {calendar.map((week) => (
          <div className="calendarMonthWeek">
            {week.map((day) => (
              <div
                className="day"
                // onClick={() => setValue(day)}
              >
                <div className="number">{day.format("D")}</div>

                {backendData.map((end, i) => {
                  // const day = day.format('DD', 'day')
                  // const month = day.format('MM', 'month')
                  // const year = day.format('YYYY', 'year')
                  let classes = [];
                  // let s = (i) => {
                  //   console.log(end.id);
                  // }
                  let getId = () => {
                    setBack(i)
                    console.log(end.id);
                    console.log(back);
                    console.log(end[i]);
                    console.log(i);
                    
                  }
                  if (end.sphere.title === "???????????????? ?? ??????????")
                    classes.push("health");
                  if (end.sphere.title === "???????????? ?? ??????????????")
                    classes.push("business");
                  if (end.sphere.title === "?????????? ?? ????????????")
                    classes.push("family");
                  if (end.sphere.title === "???????????? ????????")
                    classes.push("personal");
                  if (end.sphere.title === "????????????????????")
                    classes.push("finances");
                  if (end.sphere.title === "?????????????????? ?? ????????????")
                    classes.push("friends");
                  if (end.sphere.title === "?????????????? ??????????")
                    classes.push("life");
                  if (end.sphere.title === "??????????????????????????????????????")
                    classes.push("charity");

                  return (
                    // end.start_date.slice(8, 10) === day && end.start_date.slice(5, 7) === month && end.start_date.slice(0, 4) === year ?
                    end.start_date.slice(0, 10) === day.format().slice(0, 10) ? (
                      <div className={classes.join(" ")} key={i} onClick={showReminderCreater}>
                        <div onClick={getId}>
                          {end.title}
                        </div>
                      </div>
                    ) : null
                  );
                })}

                {/* {backendData.map((end) => (
                    
                    <div className={
                      day.day() === 6 || day.day() === 0 ? "weekEndData" : "data"
                    } key={end.id} onClick={showReminderCreater} >
                      <div className="dataBlock">
                        <span className="back">{end.id}</span>
                        
                      </div>
                      
                      
                      
                      
                      
                    </div>
                  ))} */}
              </div>
            ))}
            {reminderVisibility ? (
              <>
                <CalendarReminderCreater
                  hideReminderCreater={hideReminderCreater}
                  id={backendData[back]}
                  
                />
                <div
                  className="cover"
                  onClick={hideReminderCreater}
                  
                />
              </>
            ) : null}
            {adderVisibility ? (
              <>
                <CalendarReminderAdder
                hideAdder={hideAdder}
                hyper="/calendarMonth"
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
